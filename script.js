function S(name, artist = "", language = "", style = "", note = "") {
  return { name, artist, language, style, note};
}
const songs = [
  S("失恋无罪", "alin", "国语", "流行"),
  S("不再犹豫", "Beyond", "粤语", "流行"),
  S("海阔天空", "Beyond", "粤语", "流行"),
  S("光辉岁月", "Beyond", "粤语", "流行"),
  S("真的爱你", "Beyond", "粤语", "流行"),
  S("第三人称", "Hush!", "国语", "流行"),
  S("别问很可怕", "J.Sheon", "国语", "R&B"),
  S("跳楼机", "LBI利比", "国语", "流行"),
  S("全世界都以为我们在一起", "Ruki&Yukie", "国语", "流行"),
  S("夜蝶", "snh48", "国语", "流行"),
  S("光之轨迹", "snh48", "国语", "舞曲"),
  S("迷宫", "step.jad依加", "国语", "R&B"),
  S("三国恋", "tank", "国语", "流行"),
  S("Virtual to Live", "VR", "国语", "流行"),
  S("天黑", "阿杜", "国语", "流行"),
  S("寂寞先生", "曹格", "国语", "流行"),
  S("江湖之间", "曹雨航", "国语", "古风"),
  S("理想三旬", "陈鸿宇", "国语", "民谣"),
  S("虚拟", "陈粒", "国语", "流行"),
  S("小半", "陈粒", "国语", "流行"),
  S("走马", "陈粒", "国语", "民谣"),
  S("奇妙能力歌", "陈粒", "国语", "民谣"),
  S("易燃易爆炸", "陈粒", "国语", "民谣"),
  S("0932", "陈小春", "国语", "流行"),
  S("无名之辈", "陈雪燃", "国语", "流行"),
  S("十年", "陈奕迅", "国语", "流行"),
  S("兄妹", "陈奕迅", "国语", "流行"),
  S("淘汰", "陈奕迅", "国语", "流行"),
  S("浮夸", "陈奕迅", "粤语", "流行"),
  S("白玫瑰", "陈奕迅", "粤语", "流行"),
  S("红玫瑰", "陈奕迅", "国语", "流行"),
  S("孤勇者", "陈奕迅", "国语", "流行"),
  S("K歌之王", "陈奕迅", "粤语", "流行"),
  S("不如不见", "陈奕迅", "粤语", "流行"),
  S("不要说话", "陈奕迅", "国语", "流行"),
  S("岁月如歌", "陈奕迅", "粤语", "流行"),
  S("阴天快乐", "陈奕迅", "国语", "流行"),
  S("好久不见", "陈奕迅", "国语", "流行"),
  S("孤独患者", "陈奕迅", "国语", "流行"),
  S("爱情转移", "陈奕迅", "国语", "流行"),
  S("富士山下", "陈奕迅", "粤语", "流行"),
  S("裙下之臣", "陈奕迅", "粤语", "流行"),
  S("十面埋伏", "陈奕迅", "粤语", "流行"),
  S("全世界失眠", "陈奕迅", "国语", "流行"),
  S("你给我听好", "陈奕迅", "国语", "流行"),
  S("让我留在你身边", "陈奕迅", "国语", "流行"),
  S("斯德哥尔摩情人", "陈奕迅", "粤语", "流行"),
  S("瘦子", "丁世光", "国语", "R&B"),
  S("神探", "丁世光", "国语", "R&B"),
  S("茶底世界", "丢火车乐队", "国语", "民谣"),
  S("白兰鸽巡游记", "丢火车乐队", "国语", "民谣"),
  S("玫瑰", "贰佰", "国语", "民谣"),
  S("一个像夏天一个像秋天", "范玮琪", "国语", "流行"),
  S("回留", "方大同", "国语", "R&B"),
  S("味道", "方大同", "国语", "R&B"),
  S("麦恩莉", "方大同", "国语", "R&B"),
  S("BB88", "方大同", "国语", "R&B"),
  S("每个人都会", "方大同", "国语", "R&B"),
  S("歌手与模特儿", "方大同", "国语", "R&B"),
  S("lovesong", "方大同", "国语", "R&B"),
  S("爱与诚", "古巨基", "粤语", "流行"),
  S("想你的夜", "关喆", "国语", "流行"),
  S("空心", "光泽", "国语", "流行"),
  S("凄美地", "郭顶", "国语", "流行"),
  S("不找了", "郭旭", "国语", "流行"),
  S("天路", "韩红", "国语", "流行", "看状态 "),
  S("无地自容", "黑豹乐队", "国语", "摇滚"),
  S("美好的事可不可以发生在我身上", "火西肆", "国语", "流行"),
  S("老男孩", "筷子兄弟", "国语", "流行"),
  S("我还年轻，我还年轻", "老王乐队", "国语", "流行"),
  S("模特", "李荣浩", "国语", "流行"),
  S("李白", "李荣浩", "国语", "流行"),
  S("年少有为", "李荣浩", "国语", "流行"),
  S("嚣张", "李艺皓", "国语", "流行"),
  S("山丘", "李宗盛", "国语", "流行"),
  S("晚婚", "李宗盛", "国语", "流行"),
  S("给自己的歌", "李宗盛", "国语", "流行"),
  S("当爱已成往事", "李宗盛&林忆莲", "国语", "流行"),
  S("七友", "梁汉文", "粤语", "流行"),
  S("曹操", "林俊杰", "国语", "流行"),
  S("杀手", "林俊杰", "国语", "流行"),
  S("江南", "林俊杰", "国语", "流行"),
  S("当你", "林俊杰", "国语", "流行"),
  S("她说", "林俊杰", "国语", "流行"),
  S("修炼爱情", "林俊杰", "国语", "流行"),
  S("我怀念的", "林俊杰", "国语", "流行", "live"),
  S("背对背拥抱", "林俊杰", "国语", "流行"),
  S("一千年以后", "林俊杰", "国语", "流行"),
  S("不潮不用花钱", "林俊杰", "国语", "流行"),
  S("不为谁而作的歌", "林俊杰", "国语", "流行"),
  S("输了你赢了世界又如何", "林俊杰", "国语", "流行", "live"),
  S("Always Online", "林俊杰", "国语", "流行"),
  S("黑暗骑士", "林俊杰/五月天", "国语", "流行"),
  S("归零", "林忆莲", "国语", "流行"),
  S("成全", "林宥嘉", "国语", "流行"),
  S("浪费", "林宥嘉", "国语", "流行"),
  S("说谎", "林宥嘉", "国语", "流行"),
  S("想自由", "林宥嘉", "国语", "流行"),
  S("残酷月光", "林宥嘉", "国语", "流行"),
  S("你是我的眼", "林宥嘉", "国语", "流行"),
  S("单身情歌", "林志炫", "国语", "流行"),
  S("夜夜夜夜", "林志炫", "国语", "流行", "live"),
  S("敢爱敢做", "林子祥", "粤语", "流行"),
  S("我们的明天", "鹿晗", "国语", "流行"),
  S("春风十里", "鹿先森乐队", "国语", "民谣"),
  S("童年", "罗大佑", "国语", "流行"),
  S("光阴的故事", "罗大佑", "国语", "流行"),
  S("南山南", "马頔", "国语", "民谣"),
  S("不染", "毛不易", "国语", "流行"),
  S("坏翅膀", "平安", "国语", "流行", "周菲戈live"),
  S("平凡之路", "朴树", "国语", "民谣"),
  S("b级鲨鱼", "裘德", "国语", "R&B"),
  S("OverThink", "三无Marblue", "国语", "流行"),
  S("暗香", "沙宝亮", "国语", "流行"),
  S("形容", "沈以诚", "国语", "流行"),
  S("来不及", "沈以诚", "国语", "流行"),
  S("失眠飞行", "沈以诚", "国语", "流行", "合唱"),
  S("求佛", "誓言", "国语", "流行"),
  S("生命的意义", "水木年华", "国语", "民谣"),
  S("鸽子", "宋冬野", "国语", "民谣"),
  S("安河桥", "宋冬野", "国语", "民谣"),
  S("董小姐", "宋冬野", "国语", "民谣"),
  S("莉莉安", "宋冬野", "国语", "民谣"),
  S("郭源潮", "宋冬野", "国语", "民谣"),
  S("斑马，斑马", "宋冬野", "国语", "民谣"),
  S("小情歌", "苏打绿", "国语", "流行"),
  S("野子", "苏运莹", "国语", "流行"),
  S("一万次悲伤", "逃跑计划", "国语", "民谣"),
  S("夜空中最亮的星", "逃跑计划", "国语", "流行"),
  S("流沙", "陶喆", "国语", "R&B"),
  S("天天", "陶喆", "国语", "R&B"),
  S("蝴蝶", "陶喆", "国语", "流行"),
  S("心乱飞", "陶喆", "国语", "R&B", "看状态"),
  S("二十二", "陶喆", "国语", "R&B"),
  S("普通朋友", "陶喆", "国语", "R&B"),
  S("小镇姑娘", "陶喆", "国语", "R&B"),
  S("黑色柳丁", "陶喆", "国语", "摇滚"),
  S("讨厌红楼梦", "陶喆", "国语", "R&B"),
  S("爱我还是他", "陶喆", "国语", "流行"),
  S("爱是个什么东西", "陶喆", "国语", "R&B"),
  S("飞机场的10:30", "陶喆", "国语", "R&B"),
  S("小幸运", "田馥甄", "国语", "流行"),
  S("杀死那个石家庄人", "万能青年旅店", "国语", "摇滚"),
  S("北京北京", "汪峰", "国语", "摇滚"),
  S("怒放的生命", "汪峰", "国语", "摇滚"),
  S("春天里", "汪峰", "国语", "摇滚"),
  S("情歌", "汪苏泷", "国语", "流行", "live"),
  S("唯一", "王力宏", "国语", "流行"),
  S("爱错", "王力宏", "国语", "流行"),
  S("大城小爱", "王力宏", "国语", "流行"),
  S("火力全开", "王力宏", "国语", "流行", "看状态"),
  S("改变自己", "王力宏", "国语", "流行"),
  S("爱的就是你", "王力宏", "国语", "流行"),
  S("你不知道的事", "王力宏", "国语", "流行"),
  S("爱你等于爱自己", "王力宏", "国语", "流行"),
  S("拥抱", "五月天", "国语", "流行"),
  S("温柔", "五月天", "国语", "流行"),
  S("倔强", "五月天", "国语", "流行"),
  S("知足", "五月天", "国语", "流行"),
  S("突然好想你", "五月天", "国语", "流行"),
  S("恋爱ing", "五月天", "国语", "流行"),
  S("后来的我们", "五月天", "国语", "流行"),
  S("离开地球表面", "五月天", "国语", "流行"),
  S("我不愿让你一个人", "五月天", "国语", "流行"),
  S("泪桥", "伍佰", "国语", "流行"),
  S("挪威的森林", "伍佰", "国语", "流行"),
  S("王妃", "萧敬腾", "国语", "流行"),
  S("离歌", "信乐团", "国语", "流行"),
  S("死了都要爱", "信乐团", "国语", "流行"),
  S("素颜", "许嵩&何曼婷", "国语", "流行", "合唱"),
  S("故乡", "许巍", "国语", "民谣"),
  S("蓝莲花", "许巍", "国语", "民谣"),
  S("曾经的你", "许巍", "国语", "民谣"),
  S("演员", "薛之谦", "国语", "流行"),
  S("绅士", "薛之谦", "国语", "流行"),
  S("意外", "薛之谦", "国语", "流行"),
  S("其实", "薛之谦", "国语", "流行"),
  S("刚刚好", "薛之谦", "国语", "流行"),
  S("丑八怪", "薛之谦", "国语", "流行"),
  S("下雨了", "薛之谦", "国语", "流行"),
  S("有没有", "薛之谦", "国语", "流行"),
  S("动物世界", "薛之谦", "国语", "流行"),
  S("等我回家", "薛之谦", "国语", "流行"),
  S("你还要我怎样", "薛之谦", "国语", "流行"),
  S("我好像在哪见过你", "薛之谦", "国语", "流行"),
  S("洋葱", "杨宗纬", "国语", "流行"),
  S("黑白格", "杨宗纬", "国语", "流行"),
  S("其实都没有", "杨宗纬", "国语", "流行"),
  S("凉凉", "杨宗纬&张碧晨", "国语", "流行", "合唱"),
  S("昨日青空", "尤长靖", "国语", "流行", "看状态"),
  S("体面", "于文文", "国语", "流行"),
  S("情非得已", "庾澄庆", "国语", "流行"),
  S("决爱", "詹雯婷&张远", "国语", "流行", "合唱live"),
  S("听海", "张惠妹", "国语", "流行"),
  S("天下", "张杰", "国语", "流行"),
  S("着魔", "张杰", "国语", "流行"),
  S("剑心", "张杰", "国语", "流行", "看状态"),
  S("他不懂", "张杰", "国语", "流行"),
  S("勿忘心安", "张杰", "国语", "流行"),
  S("这就是爱", "张杰", "国语", "流行", "看状态"),
  S("断点", "张敬轩", "国语", "流行"),
  S("吻得太逼真", "张敬轩", "国语", "流行", "张玮live"),
  S("慢慢", "张学友", "国语", "流行"),
  S("大海", "张雨生", "国语", "流行"),
  S("嘉宾", "张远", "国语", "流行"),
  S("偏爱", "张芸京", "国语", "流行"),
  S("爱我别走", "张震岳", "国语", "流行"),
  S("成都", "赵雷", "国语", "民谣"),
  S("理想", "赵雷", "国语", "民谣"),
  S("年", "周菲戈", "国语", "流行"),
  S("那是我", "周菲戈", "国语", "流行"),
  S("simon", "周菲戈", "国语", "流行"),
  S("枫", "周杰伦", "国语", "流行"),
  S("晴天", "周杰伦", "国语", "流行"),
  S("暗号", "周杰伦", "国语", "流行"),
  S("安静", "周杰伦", "国语", "流行"),
  S("搁浅", "周杰伦", "国语", "流行"),
  S("七里香", "周杰伦", "国语", "流行"),
  S("发如雪", "周杰伦", "国语", "流行"),
  S("告白气球", "周杰伦", "国语", "流行"),
  S("一路向北", "周杰伦", "国语", "流行"),
  S("世界末日", "周杰伦", "国语", "流行"),
  S("反方向的钟", "周杰伦", "国语", "流行"),
  S("蒲公英的约定", "周杰伦", "国语", "流行"),
  S("不该", "周杰伦&张惠妹", "国语", "流行", "合唱")
];

// 当前的筛选条件（默认都为 all）
let currentStyleFilter = 'all';
let currentLanguageFilter = 'all';

// 渲染歌曲列表
function displaySongs(list) {
  const ul = document.getElementById("songList");
  ul.innerHTML = "";
  if (list.length === 0) {
    const li = document.createElement("li");
    li.textContent = "没有找到符合条件的歌曲。";
    ul.appendChild(li);
    return;
  }
  list.forEach(song => {
    const li = document.createElement("li");
    const title = document.createElement("div");
    title.className = 'song-title';
    title.textContent = song.name || "(无歌名)";

    const meta = document.createElement("div");
    meta.className = 'song-meta';
    meta.textContent = `${song.artist || ""} ${song.note ? "／" + song.note : ""} ${song.progress ? "／" + song.progress : ""}`;

    li.appendChild(title);
    li.appendChild(meta);
    ul.appendChild(li);
  });
}

// 根据搜索和按钮筛选更新显示（注意：excel 如果没有 style/language 列，这里默认全部）
function updateFilter(currentList = songs) {
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = currentList.filter(song => {
    const matchesSearch = (song.name || "").toLowerCase().includes(searchTerm) ||
                          (song.artist || "").toLowerCase().includes(searchTerm);

    const matchesStyle = (currentStyleFilter === 'all') || ((song.style || '') === currentStyleFilter);
    const matchesLang = (currentLanguageFilter === 'all') || ((song.language || '') === currentLanguageFilter);

    return matchesSearch && matchesStyle && matchesLang;
  });

  displaySongs(filtered);
}

// 初始化显示（使用内置 songs）
displaySongs(songs);

// 搜索监听
document.getElementById("searchInput").addEventListener("input", () => updateFilter());

// 风格按钮监听
document.querySelectorAll("#styleButtons .filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentStyleFilter = btn.getAttribute("data-filter");
    document.querySelectorAll("#styleButtons .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateFilter();
  });
});

// 语言按钮监听
document.querySelectorAll("#languageButtons .filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLanguageFilter = btn.getAttribute("data-filter");
    document.querySelectorAll("#languageButtons .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateFilter();
  });
});



// 修改 updateFilter：优先使用被上传的列表（如果有）
function updateFilter(currentList) {
  const listToUse = (window.loadedSongs && window.loadedSongs.length) ? window.loadedSongs : songs;
  const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = listToUse.filter(song => {
    const matchesSearch = (song.name || "").toLowerCase().includes(searchTerm) ||
                          (song.artist || "").toLowerCase().includes(searchTerm);

    const matchesStyle = (currentStyleFilter === 'all') || ((song.style || '') === currentStyleFilter);
    const matchesLang = (currentLanguageFilter === 'all') || ((song.language || '') === currentLanguageFilter);

    return matchesSearch && matchesStyle && matchesLang;
  });

  displaySongs(filtered);
}

// 把搜索监听重绑到新的 updateFilter
document.getElementById("searchInput").addEventListener("input", () => updateFilter());

// script.js 最末尾添加

// 随机点歌功能
document.getElementById('randomBtn').addEventListener('click', function() {
  // 1. 获取当前页面上显示的所有歌曲列表项
  const listItems = document.querySelectorAll('#songList li');
  
  // 如果列表为空（或者是“没有找到符合条件的歌曲”的提示），则不执行
  if (listItems.length === 0 || (listItems.length === 1 && listItems[0].textContent.includes("没有找到"))) {
    alert("当前列表没有歌曲可供选择！");
    return;
  }

  // 2. 移除旧的高亮样式（防止连续点击时样式没清除）
  listItems.forEach(li => li.classList.remove('highlight-song'));

  // 3. 生成随机索引
  const randomIndex = Math.floor(Math.random() * listItems.length);
  const selectedLi = listItems[randomIndex];

  // 4. 滚动到该元素（如果是长列表，这就很有用）
  selectedLi.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // 5. 添加高亮样式
  selectedLi.classList.add('highlight-song');

  // 可选：稍微延迟后弹窗提示歌名（如果你觉得光是高亮还不够明显的话，可以取消下面这行的注释）
  // setTimeout(() => alert("为你推荐：" + selectedLi.querySelector('.song-title').textContent), 300);
});