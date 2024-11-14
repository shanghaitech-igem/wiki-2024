## Tabs

> Original: http://jsfiddle.net/franciscop/wwfby2y8/

A simple tab system inspired by [Components CSS Tabs](https://www.felipefialho.com/css-components/#component-tab).

```html
<div class="tabs three">
  <input id='tab-1' type='radio' name='tabgroupB' checked />
  <label class="pseudo button toggle" for="tab-1">Forest</label>
  <input id='tab-2' type='radio' name='tabgroupB'>
  <label class="pseudo button toggle" for="tab-2">Lake</label>
  <input id='tab-3' type='radio' name='tabgroupB'>
  <label class="pseudo button toggle" for="tab-3">Balloon</label>
  <div class="row">
    <div>
      <img src="img/forest.webp">
    </div>

    <div>
      <img src="img/lake.webp">
    </div>

    <div>
      <img src="img/balloon.webp">
    </div>
  </div>
</div>
```


### Gallery example

Create a gallery super-easy with thumbnails as tabs:

```html
<div class="tabs four">
  <input id="tabC-1" type='radio' name='tabGroupC' checked >
  <input id="tabC-2" type='radio' name='tabGroupC'>
  <input id="tabC-3" type='radio' name='tabGroupC'>
  <input id="tabC-4" type='radio' name='tabGroupC'>
  <div class='row'>
    <div>
      <img src="img/forest.webp">
    </div>
    <div>
      <img src="img/lake.webp">
    </div>
    <div>
      <img src="img/halong.webp">
    </div>
    <div>
      <img src="img/balloon.webp">
    </div>
  </div>
  <label for="tabC-1"><img src="img/forest.webp"></label>
  <label for="tabC-2"><img src="img/lake.webp"></label>
  <label for="tabC-3"><img src="img/halong.webp"></label>
  <label for="tabC-4"><img src="img/balloon.webp"></label>
</div>
```
