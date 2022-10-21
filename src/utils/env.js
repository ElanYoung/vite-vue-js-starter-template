/**
 * 是否为开发环境
 * @returns {Boolean}
 */
export function isDev() {
  return import.meta.env.DEV;
}

/**
 * 是否为生产环境
 * @returns {Boolean}
 */
export function isProd() {
  return import.meta.env.PROD;
}
