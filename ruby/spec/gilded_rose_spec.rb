require './lib/gilded_rose'

describe GildedRose do

  describe "#update_quality" do
    it "does not change the name" do
      items = [Item.new("foo", 0, 0)]
      GildedRose.new(items).update_quality()
      expect(items[0].name).to eq "foo"
    end

    it 'adds item to Gilded Rose' do
      items = [Item.new("foo", 0, 0)]
      rose = GildedRose.new(items)
      rose.update_quality()
      expect(rose.items.length).to eq(1)
    end
  end

end
