var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.vAll').innerHTML =
            '<img id="gallery" class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
        window.location.hash = '#gallery';
        write_url(get_link)
    }
};

new Imgur({
    clientid: '1a273159cfa9d14', //You can change this ClientID c63f15521d3bd1aa0e05b524454aa895d3e65d5c
    callback: feedback
});