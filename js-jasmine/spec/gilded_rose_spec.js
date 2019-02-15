//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Normal Items", function() {

  it("Should return item name", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("Adds normal items to shop", function() {
    items = [ new Item("foo", 0, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(rose.items.length).toEqual(1);
  });

  it("Subtracts 1 from quality for normal item", function() {
    items = [ new Item("foo", 2, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(1)
  });

  it("Subtracts 2 from quality for normal item with passed sell by date", function() {
    items = [ new Item("foo", 0, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(2)
  });

  it("Subtracts 1 from sellIn for normal item", function() {
    items = [ new Item("foo", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
  });
});

describe("Aged Brie", function() {

  it("Adds 1 to quality for Aged Brie", function() {
    items = [ new Item("Aged Brie", 5, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });

  it("Aged brie will increase quality by 2 when SellIn date is 0", () => {
    var item = [new Item("Aged Brie", 0, 0)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2)
  })

  it("Aged Brie does not increase in quality when quality is already at the threshold of 50", () => {
    var item = [new Item("Aged Brie", 0, 50)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  })

  it("Subtracts 1 from sellIn for Aged Brie", function() {
    items = [ new Item("Aged Brie", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
  });
});

describe('Tickets', () => {

  it("tickets quality goes to 0 when SellIn equals 0", () => {
    var item = [new Item("tickets", 0, 100)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

  it('tickets quality increases by 3 if SellIn is less than 6', () => {
    var item = [new Item("tickets", 5, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(33);
  })

  it('tickets quality increases by 2 if sellIn date is greater than 5', () => {
    var item = [new Item("tickets", 6, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  })

  it("tickets quality increases by 1 if SellIn is greater or equal to 11", () => {
    var item = [new Item("tickets", 11, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(31);
  })

  it("ticket quality does not depreciate if quality >= 50 AND sellIn is a positive integer ", () => {
    var item = [new Item("tickets", 1, 50)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  })
})

