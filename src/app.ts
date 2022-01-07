import { random } from 'lodash';
import { generateRandomId, Component } from './utils'

@Component({
    id: 'app'
})
class App  {
    onInit(el: HTMLElement | null): void {
        setInterval(function() {
            if (el) {
                el.innerHTML = generateRandomId({
                    symbol : '#',
                    length: random(7, 18)
                })
            }
        }, 1000)
    }
}

function main(ComponentClass: any) {
    const el = document.getElementById(ComponentClass.id)
    const cmp = new ComponentClass()
    cmp.onInit(el)
}

main(App)