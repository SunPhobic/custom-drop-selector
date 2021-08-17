(function(){
    const JSselector = {

        init: function(){
            this.cacheDOM()
            this.bindings()
        },
        cacheDOM: function(){
            this.container = document.querySelector('#js-selector')
            this.arrowUp = document.querySelector('#js-selector-arrow-up')
            this.arrowDown = document.querySelector('#js-selector-arrow-down')
            this.button = document.querySelector('#js-selector-button')
            this.option = document.querySelectorAll('.js-selector-option')
            this.span = document.querySelector('#js-selector-span')
        },
        bindings: function(){            
            this.button.addEventListener('click',this.closeSelector.bind(this))
            this.button.addEventListener('click',this.changeArrow.bind(this))
            this.option.forEach(item=>item.addEventListener('click',this.selector.bind(this)))
        },

        closeSelector: function(){
            if(this.container.style.display == 'none'){
            this.container.style.display = 'block'}
            else{
                this.container.style.display = 'none'
            }
            
        },

        changeArrow: function(){
            if(this.arrowUp.style.display === 'none'){
                this.arrowUp.style.display = 'block'
            }else{
                this.arrowUp.style.display = 'none'   
            }
            if(this.arrowDown.style.display === 'none'){
                this.arrowDown.style.display = 'block'
            }else{
                this.arrowDown.style.display = 'none'   
            }
        },

        selector: function(ev){
            this.span.innerText = ev.target.innerText
            this.closeSelector()
            this.changeArrow()
        }


    }

    JSselector.init()
})()