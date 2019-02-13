require './lib/gilded_rose'

describe GildedRose do

  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("foo", 0, 2)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end

    it 'adds item to Gilded Rose' do
      items = [Item.new("foo", 0, 2)]
      rose = GildedRose.new(items)
      rose.update_quality()
      expect(rose.items.length).to eq(1)
    end

    it 'subtracts 1 from quality for normal item ' do
      items = [Item.new("foo", 2, 2)]
      rose = GildedRose.new(items)
      rose.update_quality()
      expect(items[0].quality).to eq(1)
    end

    it 'subtracts 2 from quality for normal item with passed sell by date' do
      items = [Item.new("foo", 0, 4)]
      rose = GildedRose.new(items)
      rose.update_quality()
      expect(items[0].quality).to eq(2)
    end

    it 'adds 1 to quality for Aged Brie' do
      items = [Item.new("Aged Brie", 5, 4)]
      rose = GildedRose.new(items)
      rose.update_quality()
      expect(items[0].quality).to eq(5)
    end
  end

end
