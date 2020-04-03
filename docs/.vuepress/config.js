module.exports = {
    title: 'Ray的个人随笔',
    description: 'ui 库',
    dest: './build',
	lang:'zh-CN',
    port: 6685,
    themeConfig: {
        nav: [
			{text: '主页', link: '/'},
			{text: '随笔', link: '/components/promise/'},
        ],
		// git仓库地址
		repo: 'https://github.com/haiyoungRay/Personal-essay.git',
		repoLabel: 'github',
        // 为以下路由添加侧边栏
        sidebar:{
            '/components/': [
                {
                    title: 'js基础',
                    collapsable: false,
                    children:[
						['promise','Promise'],
					]
                },
                
            ]
        },
    }
}