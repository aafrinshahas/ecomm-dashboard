const Map = () => {
return(
<div className="bg-[#F7F9FB] rounded-2xl dark:bg-[#FFFFFF0D] w-full h-full
p-4
md:p-6
">

<div className="text-[#1C1C1C] text-sm font-semibold mb-4 dark:text-[#FFFFFF]">Revenue by Location</div>
<div className="map-container">
<div className="map">
<div class="dot ny"><div class="inner-dot"></div></div>
<div class="dot sf"><div class="inner-dot"></div></div>
<div class="dot sydney"><div class="inner-dot"></div></div>
<div class="dot sg"><div class="inner-dot"></div></div>

</div>

<div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-1
gap-4
">
<div>
<div className="location">
<span>New York</span><span>72K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '75%'}}></div></div>
</div>

<div>
<div className="location">
<span>San Francisco</span><span>39K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '38%'}}></div></div>
</div>

<div>
<div className="location">
<span>Sydney</span><span>25K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '50%'}}></div></div>
</div>

<div>
<div className="location">
<span>Singapore</span><span>61K</span>
</div>
<div className="bar"><div className="bar-fill" style={{width: '65%'}}></div></div>
</div>



</div>


</div>


</div>
)
}

export default Map;