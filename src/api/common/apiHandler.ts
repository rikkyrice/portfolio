import { Vue } from 'vue-property-decorator';
import { ToastOptions, ToastObject } from 'vue-toasted';
import { AxiosRequestConfig, AxiosError } from 'axios';

const reqHandler = (request: AxiosRequestConfig) => {
  request.url = `${process.env.VUE_APP_API_ENTRY_POINT}${request.url}`;
  console.log(request);
  return Promise.resolve(request);
};

/**
 * APIエラー一覧
 */
 enum ErrorStatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  TIMEOUT = 408,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
}

const errHandler = async (error: AxiosError) => {
  // Unexpected network error
  if (!error) {
    showError(
      'ネットワーク通信に失敗しました。時間を置いてから再度アクセスしてみてください。'
    );
  }
  const errorCodeMsg = `StatusCode: ${error.response!.status}`;
  switch (error.response!.status) {
    case ErrorStatusCode.BAD_REQUEST:
      showError(
        `送信情報に誤りがあります。再度ご確認ください。${errorCodeMsg}`
      );
      break;
    case ErrorStatusCode.UNAUTHORIZED:
      showError(
        `セッションが切れています。再度ログインを行なって下さい。${errorCodeMsg}`
      );
      break;
    case ErrorStatusCode.NOT_FOUND:
      showError(`URL先が見つかりません。${errorCodeMsg}`);
      break;
    case ErrorStatusCode.METHOD_NOT_ALLOWED:
      showError(`定義されていないメソッドです。${errorCodeMsg}`);
      break;
    case ErrorStatusCode.TIMEOUT:
      showError(
        `タイムアウトエラーが発生しました。時間を置いてから再度アクセスしてみてください。${errorCodeMsg}`
      );
      break;
    case ErrorStatusCode.CONFLICT:
      showError(
        `送信情報に誤りがあります。再度ご確認ください。${errorCodeMsg}`
      );
      break;
    default:
      showError(
        `ネットワーク通信に失敗しました。時間を置いてから再度アクセスしてみてください。${errorCodeMsg}`
      );
      break;
  }
};

const options: ToastOptions = {
  position: 'bottom-center',
  fullWidth: true,
  action: {
    text: 'キャンセル',
    onClick: function (e: any, toastObject: ToastObject) {
      toastObject.goAway(0);
    },
  },
};

function showError(msg: string) {
  Vue.toasted.clear();
  Vue.toasted.error(msg);
}

export default {
  reqHandler,
  errHandler,
};