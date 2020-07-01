export default class Loader {
    constructor()
    {
        this.bg = this.generateBg();
        this.loader = this.generateLoader();
        this.wrap = document.createElement('div');
        this.wrap.style.height = document.body.clientHeight+'px';
        this.wrap.classList.add('w-full', 'absolute', 'flex', 'items-center', 'justify-center', 'top-0');
        this.display().then(this.startAnimation());
    }

    display()
    {
        return new Promise(resolve => {
            this.wrap.append(this.bg, this.loader);
            document.body.append(this.wrap);
            resolve;
        });
    }

    hide()
    {
        this.wrap.remove();
    }

    startAnimation()
    {
        this.loader.classList.add('triangle');
    }

    generateBg()
    {
        let bg = document.createElement('div');
        bg.style.width = '100%';
        bg.style.height = '100%';
        bg.style.backgroundColor = 'rgba(0,0,0,0.5)';
        bg.style.zIndex = 150;
        bg.style.position = 'absolute';

      return bg;
    }

    generateLoader()
    {
        let loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.zIndex = 160;
        loader.insertAdjacentHTML('afterbegin', `<svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
            </svg>`)
        return loader;
    }
}
