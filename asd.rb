puts "I ain't no man"
puts "But I'm no woman either"
puts "****************************************"
puts "I'm a nazi"
if 0 = 0
  puts "Hail Hitler!"
end

class Character
  attr_accessor :power_str, :weapon_srt
  def initialize(power_str, weapon_srt)
    @power_str = power_str
    @weapon_srt = weapon_srt
  end
end

character1 = Character.new(12, 50)
class Box
  def initialize(width, height)
    @width = width
    @height = height
  end

  def getWidth
    @width
  end
  def getHeight
    @height
  end

  def setWidth=(width)
    @width = width
  end
end

box1 = Box.new
box1.width = 17
box1.height = 20

puts box1.getWidth
puts box1.getHeight
