const log = console.log
function main()
{
    function changeBG()
    {
        this.style.background = 'gold'
    }
    const elm = document.querySelectorAll('div.box')
    elm.forEach(el =>
    {
        el.addEventListener('click', function ()
        {
            this.style.background = 'gold'
            log(Math.floor(Math.random() * 5))
        })
    })
}

main()
