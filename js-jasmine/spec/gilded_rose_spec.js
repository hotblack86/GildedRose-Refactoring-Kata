//var {Shop, Item} = require('../src/gilded_rose.js');
describe("Normal Items", function() {

  test("Should return item name", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  test("Adds Item to shop", function() {
    items = [ new Item("foo", 0, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(rose.items.length).toEqual(1);
  });

  test("Quality decreases by 1", function() {
    items = [ new Item("foo", 2, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(1)
  });

  test("Quality decreases by 2 if sellIn equals 0", function() {
    items = [ new Item("foo", 0, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(2)
  });

  test("SellIn decreases by 1", function() {
    items = [ new Item("foo", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
  });
});

describe("Aged Brie", function() {

  test("Quality increases by 1", function() {
    items = [ new Item("Aged Brie", 5, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });

  test("Quality increases by 2 when SellIn date is 0", function() {
    var item = [new Item("Aged Brie", 0, 0)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2)
  })

  test("Quality doesn't change if quality is 50", function() {
    var item = [new Item("Aged Brie", 0, 50)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50)
  })

  test("SellIn decreases by 1", function() {
    items = [ new Item("Aged Brie", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
  });
});

describe('Tickets', function() {

  test("Quality goes to 0 when SellIn equals 0", function() {
    var item = [new Item("tickets", 0, 100)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  })

  test('Quality increases by 3 if SellIn is less than 6', function() {
    var item = [new Item("tickets", 5, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(33);
  })

  test('Quality increases by 2 if sellIn date is greater than 5', function() {
    var item = [new Item("tickets", 6, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  })

  test("Quality increases by 1 if SellIn is greater or equal to 11", function() {
    var item = [new Item("tickets", 11, 30)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(31);
  })

  test("Quality does not depreciate if quality >= 50 AND sellIn is a positive integer ", function() {
    var item = [new Item("tickets", 1, 50)]
    var gildedRose = new Shop(item);
    var items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  })

  test("SellIn decreases by 1", function() {
    items = [ new Item("tickets", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].sellIn).toEqual(1)
  });
})

describe('Sulfuras', function() {
  test("Never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras", 2, 5)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(5)
  });
});

describe("Conjured Items", function() {

  test("Adds Conjured Items to shop", function() {
    items = [ new Item("Conjured Items", 0, 2)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(rose.items.length).toEqual(1);
  });

  test("Quality decreases by 2", function() {
    items = [ new Item("Conjured Items", 2, 4)];
    rose = new Shop(items);
    rose.updateQuality();
    expect(items[0].quality).toEqual(2)
  });

});




