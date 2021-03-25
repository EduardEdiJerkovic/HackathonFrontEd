import { TOKEN } from '../constants/local-storage';

export enum ContentTypeEnum {
  JSON = "json",
  XFORM = "x-www-form-urlencoded",
}

/**
 * Creates header with token.
 */
export const createHeader = (
  contentType: ContentTypeEnum = ContentTypeEnum.JSON
) => {
  const token = localStorage.getItem(TOKEN);
  return {
    "Content-Type": "application/" + contentType,
    Authorization: `Bearer ${token}`,
  };
};

export const createHeaderForToken = () => {
  return { "Content-Type": "application/" + ContentTypeEnum.XFORM };
};
