export default {
  /// 开发环境
  dev: {
    '/api/': {
      target: 'http://192.168.199.85:8088/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },

  /// 测试环境
  test: {
    '/api/': {
      target: 'http://192.168.199.72:8088/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },

  /// 生产环境
  pro: {
    '/api/': {
      target: 'http://itbug.shop:8088/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
