// Pulls the first post from a subreddit

	var subreddit = "News";
    var apiurl = 'https://www.reddit.com/r/' + subreddit + '/.json?';
    var postnum = 0;

	function updatepost() {
    	$.ajax({
      	type: "GET",
      	url: apiurl,
      	async: false,
      	dataType: 'json',
      	success: function(data){
        	var title = data["data"]["children"][postnum]["data"]["title"];
			var score = data["data"]["children"][postnum]["data"]["score"];
		  		$("#news-title").empty().prepend(title);
		  		$("#news-title-link").attr("href","https://reddit.com" + data["data"]["children"][postnum]["data"]["permalink"]);
      		},
      		error: function(errorMessage){
        		alert("Reddit ajax call failed");
	  		}

    	}); // END ajax call
	} // End Update Post function
	updatepost();

	$("#next-post-news").click(function(){
		postnum = postnum+1;
		updatepost();
	});
