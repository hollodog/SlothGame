'use strict'
// Application build
const app = new PIXI.Application({});
app.renderer.backgroundColor = 0x000000;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);

//Loading Assets
app.loader
   .add('assets/SlotFrame.png', 'assets/SlotFrame.png')
   .add('assets/SpinButton_Active.png', 'assets/SpinButton_Active.png')
   .add('assets/SpinButton_Normal.png', 'assets/SpinButton_Normal.pmg')
   .add('assets/Symbol_1.png', 'assets/Symbol_1.png')
   .add('assets/Symbol_2.png', 'assets/Symbol_2.png')
   .add('assets/Symbol_3.png', 'assets/Symbol_3.png')
   .add('assets/Symbol_4.png', 'assets/Symbol_4.png')
   .add('assets/Symbol_5.png', 'assets/Symbol_5.png')
   .add('assets/Symbol_6.png', 'assets/Symbol_6.png')
   .add('assets/Symbol_7.png', 'assets/Symbol_7.png')
   .add('assets/Symbol_8.png', 'assets/Symbol_8.png')
console.log(symbol)
//SlotFrame
const SlotFrameTexture = PIXI.Texture.from("assets/SlotFrame.png");
const SlotFrameSprite = new PIXI.Sprite(SlotFrameTexture);
app.stage.addChild(SlotFrameSprite);

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

//Symbols Array
const symbolsTextures = [
   PIXI.Texture.from('assets/Symbol_1.png'),
   PIXI.Texture.from('assets/Symbol_2.png'),
   PIXI.Texture.from('assets/Symbol_3.png'),
   PIXI.Texture.from('assets/Symbol_4.png'),
   PIXI.Texture.from('assets/Symbol_5.png'),
   PIXI.Texture.from('assets/Symbol_6.png'),
   PIXI.Texture.from('assets/Symbol_7.png'),
   PIXI.Texture.from('assets/Symbol_8.png'),
   PIXI.Texture.from('assets/Symbol_1.png'),
];

//Spin Array
let spin = [];
const spinContainer = new PIXI.Container();
const path_size = 5;
for (i = 0; i < 3; i++) {
   const path = new PIXI.Container();
   path.x = i * path_size;
   spinContainer.addChild(path);
};

const symbol_size = 5;
for (j = 0; j < 4; j++) {
   const symbol = new PIXI.Sprite(symbolsTextures[Math.floor(Math.random() * symbolsTextures.length)]);

   symbol.scale.x = symbol.scale.y = Math.min(symbol_size / symbol.width, symbol_size / symbol.height);
   symbol.x = Math.round((symbol_size - symbol.width) / 2);
   symbol.push(spin);
   path.addChild(spin);
};
console.log(spin)
app.stage.addChild(spinContainer);


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

