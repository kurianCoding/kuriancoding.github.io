var makeChart=function(lab,ser){
new Chartist.Line('.cl-chart', {
  labels: lab,
  series: [
	  ser
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});
}

var rangeVal=5;

makeChart(
	['0000', '0001', '0002', '0003', '0004'],
	[1, 3, 4, 5, 6],
);
 function getValue(){
			const self=this;
			var xhttp=new XMLHttpRequest()
			xhttp.onreadystatechange=function(){
				if (this.readyState==4 && this.status==200){
					var w=JSON.parse(xhttp.responseText);
					w.time=w.time.map(function(value,index,array){
					date=new Date(value*1000); 
					return date.toUTCString();
				});
					makeChart(w.time,w.count);
					console.log(w);

				}
			}
			//xhttp.open("GET","https://project.ap-south-1.elasticbeanstalk.com"+"?"+"rangeVal="+rangeVal)
			//xhttp.open("GET","https://ec2-13-233-194-212.ap-south-1.compute.amazonaws.com:5000"+"?"+"&rangeVal="+rangeVal); 
			xhttp.open("GET","https://herokuappkurian.herokuapp.com/"+"?"+"&rangeVal="+rangeVal); 
			//xhttp.open("GET","http://localhost:5000"+"?"+"&rangeVal="+rangeVal); 
			xhttp.send();
		}
function resetChart(){
					makeChart(
						['0000', '0001', '0002', '0003', '0004'],
						[0, 0, 0, 0, 0]);

}

function setVal(data){
	console.log(data);
	rangeVal=data;
}
