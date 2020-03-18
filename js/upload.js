var feedback = function(res) {
    if (res.success === true) {
        console.log('success')
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.vAll').innerHTML =
            '<img id="galery" class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/>';
        window.location.hash = '#galery';
    }
};

new Imgur({
    clientid: '4409588f10776f7', //You can change this ClientID
    callback: feedback
});