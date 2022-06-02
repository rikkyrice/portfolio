import APIClient from '@/api/common/apiClient';
import { API_PATHS } from '@/api/common/apiPaths';
import { User } from '@/models/user';

function getUser(userId: string) {
  return APIClient.getAPI<User>(API_PATHS.USER.GET(userId))
      .then((data) => Promise.resolve(data))
      .catch((err) => Promise.reject(err));
};

export default {
  getUser,
};