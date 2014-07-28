var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerText += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.span.innerText = new Date().toUTCString();
        }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var pb = new Playbasis('API_KEY');
    pb.player('1', function (result) {
        console.log("pb.player");
        console.log(result);
    });
    pb.points('1', function (result) {
        console.log("pb.points");
        console.log(result);
    });
    pb.point('1', 'exp', function (result) {
        console.log("pb.point");
        console.log(result);
    });
    pb.pointHistory('1', 'exp', 0, 10, function (result) {
        console.log("pb.pointHistory");
        console.log(result);
    });
    pb.actionLastPerformed('1', function (result) {
        console.log("pb.actionLastPerformed");
        console.log(result);
    });
    pb.actionLastPerformedTime('1', 'like', function (result) {
        console.log("pb.actionLastPerformedTime");
        console.log(result);
    });
    pb.actionPerformedCount('1', 'like', function (result) {
        console.log("pb.actionPerformedCount");
        console.log(result);
    });
    pb.badgeOwned('1', function (result) {
        console.log("pb.badgeOwned");
        console.log(result);
    });
    pb.rank('exp', 10, function (result) {
        console.log("pb.rank");
        console.log(result);
    });
    pb.ranks(10, function (result) {
        console.log("pb.ranks");
        console.log(result);
    });
    pb.level(10, function (result) {
        console.log("pb.level");
        console.log(result);
    });
    pb.levels(function (result) {
        console.log("pb.levels");
        console.log(result);
    });
    pb.goodsOwned(1, function (result) {
        console.log("pb.goodsOwned");
        console.log(result);
    });
    pb.questOfPlayer(1, "53903b37988040851b8b457a", function (result) {
        console.log("pb.questOfPlayer");
        console.log(result);
    });
    pb.questListOfPlayer(1, function (result) {
        console.log("pb.questListOfPlayer");
        console.log(result);
    });
    pb.badges(function (result) {
        console.log("pb.badges");
        console.log(result);
    });
    pb.badge('1', function (result) {
        console.log("pb.badge");
        console.log(result);
    });
    pb.goodsList(function (result) {
        console.log("pb.goodsList");
        console.log(result);
    });
    pb.goods("535f1f7b988040832a8b4589", function (result) {
        console.log("pb.goods");
        console.log(result);
    });
    pb.quests(function (result) {
        console.log("pb.quests");
        console.log(result);
    });
    pb.quest("53903b37988040851b8b457a", function (result) {
        console.log("pb.quest");
        console.log(result);
    });
    pb.mission("53903b37988040851b8b457a", "53903b37988040851b8b4576", function (result) {
        console.log("pb.mission");
        console.log(result);
    });
    pb.questsAvailable(1, function (result) {
        console.log("pb.questsAvailable");
        console.log(result);
    });
    pb.questAvailable("53903b37988040851b8b457a", 1, function (result) {
        console.log("pb.questAvailable");
        console.log(result);
    });
    pb.recentPoint(0, 10, function (result) {
        console.log("pb.recentPoint");
        console.log(result);
    });
    pb.recentPointByName("exp", 0, 10, function (result) {
        console.log("pb.recentPointByName");
        console.log(result);
    });

    pb.actionConfig(function (result) {
        console.log("pb.actionConfig");
        console.log(result);
    });
};
