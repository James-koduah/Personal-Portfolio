let floaters = []
var $emitter = new MyEmitter()
let spiceLevel = 0

function spiceUpPage(e){
    let astronautDialouge = [
        [
            {elemType: false, timeout: 1500},
            '<svg class="flare" viewBox="-11 0 34 34" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ae2025" transform="matrix(.413892 .0862234 -.0862234 .413892 -1135.3273 -1495.8263)"> <path d="m3377.19 2978.61 11.48-3.06 3.92 10.44-10.15 4.85z"></path> <path d="m3372.83 2968.55 11.64-4.6-16.08-51.62-17.48 5.55z"></path> </g> </g></svg>'
        ],
        [
            { elemType: 'h5', timeout: 800},
            'Wha...                What!',
        ],
        [
            { elemType: 'h5', timeout: 800},
            'What is happening!',
        ],
        [
            { elemType: 'h5', timeout: 800},
            'What is happening!',
        ],
        [
            { elemType: 'h5', timeout: 800},
            'Wha...      WHERE AM I!',
        ],
        [
            { elemType: 'h5', timeout: 2000},
            'HELP ME!                           ]AHHHHHHHHHHHHHHHHHHHHHHHHH'
        ],
        [
            { elemType: 'h5', timeout: 3000},
            "HAHA!                                        I'm Joking                                        😂]                                                  Were you scared?"
        ]
    ]
    let astronautEventName = 'astronautEvent'

    if (spiceLevel === 0){
        let astronaut = new Floater('astronaut', astronautEventName, astronautDialouge, floaters) 
        floaters.push(astronaut)
        const rect = e.getBoundingClientRect();
        const x = rect.left + window.scrollX;
        const y = rect.top + window.scrollY;
        $emitter.emit(astronautEventName, {'event': 'start', 'x': x, 'y': y })
        $emitter.on(astronautEventName, (data)=>{
            if (data.detail.event === 'ranD'){
                $emitter.emit(astronautEventName, {'event': 'runD', 'index': false})
            }
        })
        spiceLevel++
    }
}