// 默认dev配置
const config = {
    // 是否调试模式
    DEBUG: true,
    // MySQL数据库配置
    MYSQL: {
        host: 'localhost',
        database: 'decorate',
        username: 'root',
        password: 'root'
    }
};

if (process.env.NODE_ENV === 'production') {
    // 生产环境MySQL数据库配置
    config.MYSQL = {
        host: 'aaa.mysql.rds.aliyuncs.com',
        database: 'decorate',
        username: 'root',
        password: 'root'
    };
}
// 导出配置
module.exports = config;