class MyEmitter {
    constructor() {
        this.eventTarget = new EventTarget();
    }
    emit(eventName, detail) {
        const event = new CustomEvent(eventName, { detail });
        this.eventTarget.dispatchEvent(event);
    }
    on(eventName, callback) {
        this.eventTarget.addEventListener(eventName, callback);
    }
}

class Floater{
    constructor(elementId, eventName, convo=[], otherFloaters=[]){
        this.name = elementId
        this.eventName = eventName
        this.object = document.getElementById(elementId)
        this.object.classList.add('floater')
        document.addEventListener('mousemove', (event)=>{
            this.followMouse(event)
            this.checkDialougeBoxPosition()
        })
        this.xOffset = -130 * otherFloaters.length
        this.yOffset = 180 * otherFloaters.length
        this.convo = convo
        this.dialougeBox = document.createElement('div')
        this.dialougeBox.classList.add('floaterConvo', 'floatToRight', 'floatAtTop')
        this.dialougeBox.appendChild(document.createElement('div'))
        this.object.appendChild(this.dialougeBox)
        this.listenEvent(eventName)
        this.obj_img = this.object.querySelector('img')
    }

    name;
    object;
    obj_img;
    mouseX = 0;
    mouseY = 0;
    lastX = 0;
    lastY = 0;
    yOffset = 0;
    xOffset = 0;
    resetTiltTimeout;
    dialougeBox;
    dialougeBoxWidth = 150
    dialougeBoxHeight = 100;
    dialougeBoxPositionX = 0;
    dialougeBoxPositionY = 0;
    currentConvo = 0

    listenEvent(eventName){
        $emitter.on(eventName, (data)=>{
            if (data.detail.event === 'start'){
                this.object.style.top = data.detail.y + 'px'
                this.object.style.left = data.detail.x + 'px'
                this.runDialouge()
            }
            if (data.detail.event === 'runD'){
                if (data.detail.index) this.currentConvo = data.detail.index
                this.runDialouge()
            }
        })
    }

    followMouse(event){
        this.mouseX = event.clientX
        this.mouseY = event.clientY
    
        this.object.style.top = this.mouseY + this.yOffset + 'px'
        this.object.style.left = this.mouseX + this.xOffset + 'px'
    
        const angle = Math.atan2(this.mouseY - this.lastY, this.mouseX - this.lastX) * 180 / Math.PI;
        this.obj_img.style.transform = `rotate(${angle / 3}deg)`
    
        this.lastX = this.mouseX;
        this.lastY = this.mouseY;
    
        clearTimeout(this.resetTiltTimeout);
    
        // Set a timeout to reset the tilt after movement stops (200ms of no movement)
        this.resetTiltTimeout = setTimeout(() => {
            this.obj_img.style.transform = `rotate(0deg)`; // Reset to normal position
        }, 200); // 200ms delay before resetting
    }
    checkDialougeBoxPosition() {
        if (this.mouseX < this.dialougeBoxWidth){
            if (this.dialougeBoxPositionX === 1){
                this.dialougeBox.classList.remove('floatToLeft')
                this.dialougeBox.classList.add('floatToRight')
                this.dialougeBoxPositionX = 0
            }
        } else if (this.mouseX + this.dialougeBoxWidth > window.innerWidth){
            if (this.dialougeBoxPositionX === 0){
                this.dialougeBox.classList.remove('floatToRight')
                this.dialougeBox.classList.add('floatToLeft')
                this.dialougeBoxPositionX = 1
            }
        }
        if (this.mouseY < this.dialougeBoxHeight){
            if (this.dialougeBoxPositionY === 0){
                this.dialougeBox.classList.remove('floatAtTop')
                this.dialougeBox.classList.add('floatAtBottom')
                this.dialougeBoxPositionY = 1
            }
        } else if (this.mouseY + this.dialougeBoxHeight > window.innerHeight){
            if (this.dialougeBoxPositionY === 1){
                this.dialougeBox.classList.remove('floatAtBottom')
                this.dialougeBox.classList.add('floatAtTop')
                this.dialougeBoxPositionY = 0
            }
        }
    }
    async runDialouge(){
        this.dialougeBox.innerHTML = ''
        let [settings, text] = this.convo[this.currentConvo]
        if (settings.elemType === false){
            this.dialougeBox.innerHTML = text
        }else{
            let elem = document.createElement(settings.elemType)
            this.dialougeBox.appendChild(elem)
            await this.autoType(text, elem, 30)
        }
        this.currentConvo++
        setTimeout(() => {
            $emitter.emit(this.eventName, {'event': 'ranD'})
        }, settings.timeout);
    }
    autoType(text, element, speed) {
        return new Promise((resolve) => {
            let charIndex = 0;
    
            function typeChar() {
                if (charIndex < text.length) {
                    if (text.charAt(charIndex) === ']'){
                        element.innerHTML += '<br>'
                        charIndex++;
                        setTimeout(typeChar, speed);
                        return
                    }
                    element.innerHTML += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, speed);
                } else {
                    resolve(); // Resolve the promise once typing is done
                }
            }
    
            element.innerHTML = ""; // Clear the element before typing
            typeChar();
        });
    }
}