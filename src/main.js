import { Application, Container, Graphics, Text } from 'pixi.js';
    import './index.css';

    const app = new Application({ width: 800, height: 600, backgroundColor: 0xffffff });
    document.getElementById('app').appendChild(app.view);

    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    document.getElementById('app').prepend(toolbar);

    const buttons = ['Water', 'Oil', 'Air', 'Heat Source', 'Obstacle'];
    buttons.forEach(buttonText => {
      const button = document.createElement('button');
      button.textContent = buttonText;
      button.addEventListener('click', () => handleButtonClick(buttonText));
      toolbar.appendChild(button);
    });

    function handleButtonClick(buttonText) {
      // Handle button clicks and update the simulation
      console.log(`Clicked: ${buttonText}`);
    }

    const container = new Container();
    app.stage.addChild(container);

    const graphics = new Graphics();
    graphics.beginFill(0x0000ff);
    graphics.drawRect(0, 0, 800, 600);
    graphics.endFill();
    container.addChild(graphics);

    const text = new Text('Fluid-Dynamik-Labor', { fontSize: 24, fill: 0x000000 });
    text.x = 20;
    text.y = 20;
    container.addChild(text);
