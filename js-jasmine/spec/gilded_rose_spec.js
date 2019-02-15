var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("adds normal items to shop", function() {
    items = [ new Item("foo", 0, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(rose.items.length).toEqual(1);
  });

  it("subtracts 1 from quality for normal item", function() {
    items = [ new Item("foo", 2, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(1)
  });

  it("subtracts 2 from quality for normal item with passed sell by date", function() {
    items = [ new Item("foo", 0, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(2)
  });


  it("adds 1 to quality for Aged Brie", function() {
    items = [ new Item("Aged Brie", 5, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });



});
