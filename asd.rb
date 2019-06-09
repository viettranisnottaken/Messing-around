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
