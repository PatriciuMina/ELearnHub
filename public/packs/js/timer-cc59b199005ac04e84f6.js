/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/timer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/timer.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/timer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var c = 180;
var t;
$(document).ready(function () {
  // Display the first question
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
  $(this).find(".preButton").attr('disabled', 'disabled');
  timedCount();
  $(this).find(".preButton").on("click", function () {
    if (!quizOver) {
      if (currentQuestion == 0) {
        return false;
      }

      if (currentQuestion == 1) {
        $(".preButton").attr('disabled', 'disabled');
      }

      currentQuestion--; // Since we have already displayed the first question on DOM ready

      if (currentQuestion < questions.length) {
        displayCurrentQuestion();
      }
    } else {
      if (viewingAns == 3) {
        return false;
      }

      currentQuestion = 0;
      viewingAns = 3;
      viewResults();
    }
  }); // On clicking next, display the next question

  $(this).find(".nextButton").on("click", function () {
    if (!quizOver) {
      var val = $("input[type='radio']:checked").val();

      if (val == undefined) {
        $(document).find(".quizMessage").text("Please select an answer");
        $(document).find(".quizMessage").show();
      } else {
        // TODO: Remove any message -> not sure if this is efficient to call this each time....
        $(document).find(".quizMessage").hide();

        if (val == questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }

        iSelectedAnswer[currentQuestion] = val;
        currentQuestion++; // Since we have already displayed the first question on DOM ready

        if (currentQuestion >= 1) {
          $('.preButton').prop("disabled", false);
        }

        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          $('#iTimeShow').html('Quiz Time Completed!');
          $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
          c = 185;
          $(document).find(".preButton").text("View Answer");
          $(document).find(".nextButton").text("Play Again?");
          quizOver = true;
          return false;
        }
      }
    } else {
      // quiz is over and clicked the next button (which now displays 'Play Again?'
      quizOver = false;
      $('#iTimeShow').html('Time Remaining:');
      iSelectedAnswer = [];
      $(document).find(".nextButton").text("Next Question");
      $(document).find(".preButton").text("Previous Question");
      $(".preButton").attr('disabled', 'disabled');
      resetQuiz();
      viewingAns = 1;
      displayCurrentQuestion();
      hideScore();
    }
  });
});

function timedCount() {
  if (c == 185) {
    return false;
  }

  var hours = parseInt(c / 3600) % 24;
  var minutes = parseInt(c / 60) % 60;
  var seconds = c % 60;
  var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
  $('#timer').html(result);

  if (c == 0) {
    displayScore();
    $('#iTimeShow').html('Quiz Time Completed!');
    $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
    c = 185;
    $(document).find(".preButton").text("View Answer");
    $(document).find(".nextButton").text("Play Again?");
    quizOver = true;
    return false;
  }

  c = c - 1;
  t = setTimeout(function () {
    timedCount();
  }, 1000);
}

/***/ })

/******/ });
//# sourceMappingURL=timer-cc59b199005ac04e84f6.js.map