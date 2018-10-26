var points = 0

// history section
$('#hist_q1').click(function(){
    if(event.target.id == 'hist_q1'){
        $.get("https://opentdb.com/api.php?amount=1&category=23&difficulty=easy", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#hist_q1").html(html_str)

            $("#hist_q1").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 100;
                    $('#points').html(points);
                    $('#hist_q1').html('Good Answer!');
                    $('#hist_q1').attr("disabled", true);
                }
                else {
                    $('#hist_q1').attr("disabled", true);
                    $('#hist_q1').html(':(')
                }
            })      
        }, "json");
    }
});

$('#hist_q2').click(function(){
    if(event.target.id == 'hist_q2'){
        $.get("https://opentdb.com/api.php?amount=1&category=23&difficulty=medium", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#hist_q2").html(html_str)

            $("#hist_q2").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 200;
                    $('#points').html(points);
                    $('#hist_q2').html('Good Answer!')
                    $('#hist_q2').attr("disabled", true);
                }
                else {
                    $('#hist_q2').attr("disabled", true);
                    $('#hist_q2').html(':(')
                }
            })      
        }, "json");
    }
});

$('#hist_q3').click(function(){
    if(event.target.id == 'hist_q3'){
        $.get("https://opentdb.com/api.php?amount=1&category=23&difficulty=hard", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#hist_q3").html(html_str)

            $("#hist_q3").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 300;
                    $('#points').html(points);
                    $('#hist_q3').html('Good Answer!')
                    $('#hist_q3').attr("disabled", true);
                }
                else {
                    console.log(event.target.id)
                    $('#hist_q3').html(':(')
                    $('#hist_q3').attr("disabled", true);
                }
            })      
        }, "json");
    }
});

// this is the entertainment section
$('#ent_q1').click(function(){
    if(event.target.id == 'ent_q1'){
        $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#ent_q1").html(html_str)

            $("#ent_q1").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 300;
                    $('#points').html(points);
                    $('#ent_q1').html('Good Answer!');
                    $('#ent_q1').attr("disabled", true);
                }
                else {
                    $('#ent_q1').attr("disabled", true);
                    $('#ent_q1').html(':(')
                }
            })      
        }, "json");
    }
});

$('#ent_q2').click(function(){
    if(event.target.id == 'ent_q2'){
        $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=medium", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#ent_q2").html(html_str)

            $("#ent_q2").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 200;
                    $('#points').html(points);
                    $('#ent_q2').html('Good Answer!')
                    $('#ent_q2').attr("disabled", true);
                }
                else {
                    $('#ent_q2').attr("disabled", true);
                    $('#ent_q2').html(':(')
                }
            })      
        }, "json");
    }
});

$('#ent_q3').click(function(){
    if(event.target.id == 'ent_q3'){
        $.get("https://opentdb.com/api.php?amount=1&category=11&difficulty=hard", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#ent_q3").html(html_str)

            $("#ent_q3").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 100;
                    $('#points').html(points);
                    $('#ent_q3').html('Good Answer!')
                    $('#ent_q3').attr("disabled", true);
                }
                else {
                    console.log(event.target.id)
                    $('#ent_q3').html(':(')
                    $('#ent_q3').attr("disabled", true);
                }
            })      
        }, "json");
    }
});

// this is the science section
$('#sci_q1').click(function(){
    if(event.target.id == 'sci_q1'){
        $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#sci_q1").html(html_str)

            $("#sci_q1").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 100;
                    $('#points').html(points);
                    $('#sci_q1').html('Good Answer!')
                    $('#sci_q1').attr("disabled", true);
                }
                else {
                    console.log(event.target.id)
                    $('#sci_q1').html(':(')
                    $('#sci_q1').attr("disabled", true);
                }
            })      
        }, "json");
    }
});


$('#sci_q2').click(function(){
    if(event.target.id == 'sci_q2'){
        $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=medium", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#sci_q2").html(html_str)

            $("#sci_q2").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 200;
                    $('#points').html(points);
                    $('#sci_q2').html('Good Answer!')
                    $('#sci_q2').attr("disabled", true);
                }
                else {
                    $('#sci_q2').attr("disabled", true);
                    $('#sci_q2').html(':(')
                }
            })      
        }, "json");
    }
});

$('#sci_q3').click(function(){
    if(event.target.id == 'sci_q3'){
        $.get("https://opentdb.com/api.php?amount=1&category=17&difficulty=hard", function(res) {
            var answer = $.merge( [] ,res.results[0].incorrect_answers)
            answer.push(res.results[0].correct_answer)
            answer.sort(function(){
                return Math.round(Math.random());
            })
            console.log(res.results[0].correct_answer, answer)
            var html_str = "";
            html_str += "<h5 style='color: black; white-space: normal;'>" + res.results[0].question + "</h5>";
            html_str += "<form>"; 
            for(var i = 0; i < answer.length; i++) {
                html_str += "<p><input type='radio' id='" + answer[i] + "' style='white-space:normal'> " + answer[i] + "</p>";
            }
            html_str += "</form>";
            $("#sci_q3").html(html_str)

            $("#sci_q3").html(html_str).on('click',function(event){
                if(res.results[0].correct_answer == event.target.id){
                    points = points + 300;
                    $('#points').html(points);
                    $('#sci_q3').html('Good Answer!');
                    $('#sci_q3').attr("disabled", true);
                }
                else {
                    $('#sci_q3').attr("disabled", true);
                    $('#sci_q3').html(':(')
                }
            })      
        }, "json");
    }
});