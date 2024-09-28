// Enter键盘触发搜索
document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮元素
    var button = document.getElementById('searchButton');
    // 给文档添加键盘按下事件监听器
    document.addEventListener('keydown', function (event) {
        // 检查按下的键是否是回车键
        if (event.key === 'Enter') {
            // 阻止默认行为，例如表单提交
            event.preventDefault();
            // 触发按钮的点击事件
            button.click();
        }
    });
});

const vm = new Vue({
    el: '#root',
    data() {
        return {
            searchSelected: 0,
            idValue: '',
            searchList: [
                {
                    name: 'Bing',
                    id: 0,
                    logo: '',
                    url: 'https://cn.bing.com/search?q='
                },
                {
                    name: 'Google',
                    id: 1,
                    logo: '',
                    url: 'https://www.google.com/search?q='
                },
                {
                    name: 'GitHub',
                    id: 2,
                    logo: '',
                    url: 'https://github.com/search?q='
                },
                {
                    name: 'CSDN',
                    id: 3,
                    logo: '',
                    url: 'https://so.csdn.net/so/search?q='
                },
                {
                    name: 'Gitee',
                    id: 4,
                    logo: '',
                    url: 'https://so.gitee.com/?q='
                },
                {
                    name: 'bilibili',
                    id: 5,
                    logo: '',
                    url: 'https://search.bilibili.com/all?keyword='
                },
                {
                    name: '抖音',
                    id: 6,
                    logo: '',
                    url: 'https://www.douyin.com/search/'
                },
                {
                    name: '微博',
                    id: 7,
                    logo: '',
                    url: 'https://m.weibo.cn/search?containerid=100103type%3D1%26q%3D'
                },
                {
                    name: '知乎',
                    id: 8,
                    logo: '',
                    url: 'https://www.zhihu.com/search?q='
                },
                {
                    name: '淘宝',
                    id: 9,
                    logo: '',
                    url: 'https://s.taobao.com/search?&q='
                },
                {
                    name: '京东',
                    id: 10,
                    logo: '',
                    url: 'https://search.jd.com/Search?keyword='
                },
                {
                    name: 'BaiDu',
                    id: 11,
                    logo: '',
                    url: 'https://www.baidu.com/s?wd='
                },
                {
                    name: 'Sogou',
                    id: 12,
                    logo: '',
                    url: 'https://www.sogou.com/web?query='
                },
                {
                    name: '360 搜索',
                    id: 13,
                    logo: '',
                    url: 'https://www.so.com/s?q='
                },
            ],
            inputText: '',
        };
    },
    methods: {
        searchListButton(event) {
            this.searchSelected = event.target.id;
        },
        searchButton() {
            window.open(this.searchURL, '_self');
        },
    },
    computed: {
        searchURL() {
            var text01 = this.searchList[this.searchSelected].url + this.inputText;
            console.log(text01);
            return text01;
        }
    }
});

function YUANSHEN() {
    window.open('https://ys.mihoyo.com', '_blank');
}

function toggleBlock() {
    var block = document.getElementById('searchListTable');
    if (block.classList.contains('hidden')) {
        block.classList.remove('hidden');
    } else {
        block.classList.add('hidden');
    }
}