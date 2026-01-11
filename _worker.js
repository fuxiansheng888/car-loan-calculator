// 路径：仓库根目录/_worker.js 
export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 静态资源直接放行 
    if (url.pathname.match(/\.(css|js|png|svg)$/i)) {
      return fetch(request);
    }
    
    // 其他请求重定向到 index.html 
    return new Response(null, {
      status: 301,
      headers: { 
        "Location": "/index.html",
        "Cache-Control": "max-age=3600"
      }
    });
  }
}