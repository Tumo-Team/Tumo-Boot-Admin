import { defHttp } from '/@/utils/http/axios';
import { ApiPrefix } from '/@/api/model/baseModel';

const Api = {
  UserList: `${ApiPrefix.UPMS_PREFIX}/user/list`,
  UserPage: `${ApiPrefix.UPMS_PREFIX}/user/page`,
  BasicApi: `${ApiPrefix.UPMS_PREFIX}/user`,
  CheckUserName: `${ApiPrefix.UPMS_PREFIX}/user/checkName`,
};

/**
 * 分页、条件查询
 */
export function getUserList(params: any) {
  return defHttp.get({
    url: Api.UserList,
    params,
  });
}

/**
 * 条件查询
 */
export function getUserPage(params: any) {
  return defHttp.get({
    url: Api.UserPage,
    params,
  });
}

/**
 * 根据ID查询
 */
export function getUser(id: string | number) {
  return defHttp.get({
    url: `${Api.BasicApi}/${id}`,
  });
}

/**
 * 校验名称
 */
export function checkUserName(params: any) {
  return defHttp.post({
    url: Api.CheckUserName,
    params,
  });
}

/**
 * 新增
 */
export function addUser(params: any) {
  return defHttp.post({
    url: `${Api.BasicApi}`,
    params,
  });
}

/**
 * 修改
 */
export function updateUser(params: any) {
  return defHttp.put({
    url: `${Api.BasicApi}`,
    params,
  });
}

/**
 * 删除
 */
export function deleteUser(id: string | number) {
  return defHttp.delete({
    url: `${Api.BasicApi}/${id}`,
  });
}
