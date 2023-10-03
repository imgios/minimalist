function fetchRepositories(user) {
    let url = "https://api.github.com/repos";

    $('.card').each(function () {
        let repo = this.id;
        if (typeof repo !== 'undefined' && repo !== '') {
            console.log("repo: " + repo);
            $.get(url + "/" + user + "/" + repo, function (data, status) {
                $('#' + repo).find('.card-title').text(data.full_name);
                $('#' + repo).find('.card-text').text(data.description);
            });
        }
    });
}

$(window).on('load', function() {
    fetchRepositories("imgios");
});