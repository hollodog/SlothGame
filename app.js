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
   //Symbols
   let symbol = new PIXI.Sprite(PIXI.Texture.from('Symbol_1.png')); /// няма да е такова дълго и тъпо в послествие
   app.stage.addChild(symbol);

   //Slot Frame
   const slotFrame = new PIXI.Sprite(PIXI.Texture.from('SlotFrame.png'));
   app.stage.addChild(slotFrame);

   console.log(symbol)




   //Button
   const spinButton = PIXI.Texture.from("assets/SpinButton_Normal.png");
   const spinButtonActive = PIXI.Texture.from("assets/SpinButton_Active.png");

   let button = new PIXI.Sprite(spinButton);
   button.x = app.screen.width / 2;
   button.y = app.screen.height / 2;
   button.anchor.set(-2.3, -2.8);
   button.interactive = true;
   button.buttonMode = true;

   button
      .on('pointerdown', onButtonDown)
      .on('pointerup', onButtonDown);

   function onButtonDown() {
      this.isdown = false;
      if (this.isUp) {
         this.texture = spinButton;
      }
      else {
         this.texture = spinButtonActive;
      }
   };
   app.stage.addChild(button);

};
app.loader.load(onAssetsLoaded);
//Spin Array
// let spin = [];
// const spinContainer = new PIXI.Container();
// const path_size = 5;
// for (i = 0; i < 3; i++) {
//    const path = new PIXI.Container();
//    path.x = i * path_size;
//    spinContainer.addChild(path);
// };

// const symbol_size = 5;
// for (j = 0; j < 4; j++) {
//    const symbol = new PIXI.Sprite(symbolsTextures[Math.floor(Math.random() * symbolsTextures.length)]);

//    symbol.scale.x = symbol.scale.y = Math.min(symbol_size / symbol.width, symbol_size / symbol.height);
//    symbol.x = Math.round((symbol_size - symbol.width) / 2);
//    symbol.push(spin);
//    path.addChild(spin);
// };
// console.log(spin)
// app.stage.addChild(spinContainer);


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

