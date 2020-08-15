alert("sortAsc");
// var nameTxt=document.getElementById("galaxyNameID");
var displaySection=document.getElementById("displaySectionID");
var galaxies=['mayur','madhukar','walzade','dnyanu','rahul','kiran','papa','aai','bhau'];
var ListSorter= function (){
	
	this.show= function (){
		displaySection.innerHTML="";
		displaySection.appendChild(this.createListVew());
	}
	this.createListVew=function()
	{
		var listView=document.createElement('ol');
		listView.className="collection";
		for(var i=0;i<galexies.length;i++)
		{
			var listViewItem=document.createElement('li');
			listViewItem.className="collection-item";
			listViewItem.appendChild(document.createTextMode(galaies[i]));
			listView.appendChild(listViewItem);
		}
	return listView;
} 
this.sortData=function(asc){
	if(asc){
		galaxies.sort();
		this.show();
	}else{
		galaxies.reverse();
		this.show();
	}
};
var sorter= new ListSorter();
// function addItem(){sorter.addNewItem(nameTxt.value);}
function sortAsc(){sorter.sortData(true)};
function sortDesc(){sorter.sortData(false)};
sorter.show();

