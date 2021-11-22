'use strict'
// Application build
const app = new PIXI.Application({});
app.renderer.backgroundColor = 0x000000;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

Object.assign(window, { app })

//Loading Assets

app.loader
   .add('SpriteSheet', 'assets/SpriteSheet.json')

function onAssetsLoaded() {
   //Slot Frame
   const slotFrame = new PIXI.Sprite(PIXI.Texture.from('SlotFrame.png'));
   app.stage.addChild(slotFrame);

   //Symbols    
   const symbolArrContainer = new PIXI.Container();

   function onClick(){
      const symbolArr = [] 
      for(let i=0; i<=14 ; i++){
         const symbolNum = Math.trunc(Math.random() * 8) + 1;
         const symbol = new PIXI.Sprite(PIXI.Texture.from(`Symbol_${symbolNum}.png`));
         symbol.x = (i%5)*270;
         symbol.y = (i%3)*270;
         app.stage.addChild(symbol);
      };
   };
   //Button
   const button = new PIXI.Sprite(PIXI.Texture.from(`SpinButton_Normal.png`));
   button.interactive= true;
   button.buttonMode = true;
   button.x =  app.screen.width/1.53;
   button.y =  app.screen.height/1.16;

   button.addListener("pointerdown", onClick);
   app.stage.addChild(button);
};
app.loader.load(onAssetsLoaded);


/*
// ReelSpinning (Virtual Scrolling Dom)
// 1.Infrastructure

const SETTINGS = {
   minIndex: 1,
   maxIndex: 8,
   startIndex: 3,
   itemHeight: 20, // Need to check container(flexability)
   amount: 3,
   tolerance: 1
};

const getData = (offset, limit) => {
   const data = [];
   const start = Math.max(SETTINGS.minIndex, offset);
   const end = Math.min(offset + limit - 1, SETTINGS.maxIndex);
   if (start <= end) {
      for (let i = start; i <= end; i++) {
         data.push({ index: i, text: 'item${i}' })
      };
   };
};

const rowTemplate = item =>
   <div className="item" key={item.index}>
      {item.text}
   </div>
*/

// // 2. ????????????
// render() {
//    const { viewportHeight, topPaddingHeight, bottomPaddingHeight, data } = this.state;
//    return (
//       <div className='viewport' style={{ height: viewportHeight }}>
//          <div style={{ height: topPaddingHeight }}></div>
//          {data.map(this.props.row)}
//          <div style={{ height: bottomPaddingHeight }}></div>
//       </div>
//    )
// }

