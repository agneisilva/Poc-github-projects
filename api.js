function getReposGithub(user, successFuncCallback, errosFuncCallback) {

    $.ajax({
        url: "https://api.github.com/users/" + user + "/repos",
        dataType: "json",
        headers: { "Accept": "application/vnd.github.inertia-preview+json" },
        error: errosFuncCallback,
        success: successFuncCallback
    });

}


