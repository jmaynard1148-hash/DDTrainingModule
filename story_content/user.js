window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  
(function () {
  const player = GetPlayer();

  function setupField() {
    const field = [...document.querySelectorAll("input, textarea")]
      .find(el =>
        el.getAttribute("aria-label") === "Nine-digit number entry"
      );

    if (!field) {
      setTimeout(setupField, 200);
      return;
    }

    field.setAttribute("inputmode", "numeric");
    field.setAttribute("maxlength", "9");

    // Prevent non-numeric keystrokes
    field.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.metaKey) return;

      if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Prevent non-numeric text insertion
    field.addEventListener("beforeinput", function (e) {
      if (e.data && /\D/.test(e.data)) {
        e.preventDefault();
      }
    });

    function cleanValue() {
      const cleaned = field.value.replace(/\D/g, "").slice(0, 9);

      if (field.value !== cleaned) {
        field.value = cleaned;
      }

      player.SetVar("NineDigitEntry", cleaned);

      // True only when exactly 9 digits entered
      player.SetVar("ValidEntry", /^\d{9}$/.test(cleaned));
    }

    field.addEventListener("input", cleanValue);
    cleanValue();
  }

  setupField();
})();

}

window.Script2 = function()
{
  
(function () {
  const player = GetPlayer();

  function setupField() {
    const field = [...document.querySelectorAll("input, textarea")]
      .find(el =>
        el.getAttribute("aria-label") === "Account number entry"
      );

    if (!field) {
      setTimeout(setupField, 200);
      return;
    }

    field.setAttribute("inputmode", "numeric");

    // Prevent non-numeric keystrokes
    field.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.metaKey) return;

      if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Prevent non-numeric text insertion
    field.addEventListener("beforeinput", function (e) {
      if (e.data && /\D/.test(e.data)) {
        e.preventDefault();
      }
    });

    function cleanValue() {
      const cleaned = field.value.replace(/\D/g, "");

      if (field.value !== cleaned) {
        field.value = cleaned;
      }

      player.SetVar("AccountNumber", cleaned);

      // True when at least one digit is entered
      player.SetVar("ValidAccount", /^\d+$/.test(cleaned));
    }

    field.addEventListener("input", cleanValue);
    cleanValue();
  }

  setupField();
})();

}

window.Script3 = function()
{
  
document.addEventListener("keydown", function(event) {
  const field = event.target;

  if (
    event.key === "Enter" &&
    field.matches("textarea")
  ) {
    event.preventDefault();
  }
}, true);

}

window.Script4 = function()
{
  
var player = GetPlayer();

var firstName = player.GetVar("FirstName").trim();
var lastName = player.GetVar("LastName").trim();

var firstInitial = firstName.charAt(0).toUpperCase();
var lastInitial = lastName.charAt(0).toUpperCase();

var initials = firstInitial + lastInitial;

player.SetVar("Initials", initials);

}

window.Script5 = function()
{
  
(function () {
  const player = GetPlayer();

  function setupField() {
    const field = [...document.querySelectorAll("input, textarea")]
      .find(el =>
        el.getAttribute("aria-label") === "Nine-digit number entry"
      );

    if (!field) {
      setTimeout(setupField, 200);
      return;
    }

    field.setAttribute("inputmode", "numeric");
    field.setAttribute("maxlength", "9");

    // Prevent non-numeric keystrokes
    field.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.metaKey) return;

      if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Prevent non-numeric text insertion
    field.addEventListener("beforeinput", function (e) {
      if (e.data && /\D/.test(e.data)) {
        e.preventDefault();
      }
    });

    function cleanValue() {
      const cleaned = field.value.replace(/\D/g, "").slice(0, 9);

      if (field.value !== cleaned) {
        field.value = cleaned;
      }

      player.SetVar("NineDigitEntry", cleaned);

      // True only when exactly 9 digits entered
      player.SetVar("ValidEntry", /^\d{9}$/.test(cleaned));
    }

    field.addEventListener("input", cleanValue);
    cleanValue();
  }

  setupField();
})();

}

window.Script6 = function()
{
  
(function () {
  const player = GetPlayer();

  function setupField() {
    const field = [...document.querySelectorAll("input, textarea")]
      .find(el =>
        el.getAttribute("aria-label") === "Account number entry"
      );

    if (!field) {
      setTimeout(setupField, 200);
      return;
    }

    field.setAttribute("inputmode", "numeric");

    // Prevent non-numeric keystrokes
    field.addEventListener("keydown", function (e) {
      if (e.ctrlKey || e.metaKey) return;

      if (e.key.length === 1 && !/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Prevent non-numeric text insertion
    field.addEventListener("beforeinput", function (e) {
      if (e.data && /\D/.test(e.data)) {
        e.preventDefault();
      }
    });

    function cleanValue() {
      const cleaned = field.value.replace(/\D/g, "");

      if (field.value !== cleaned) {
        field.value = cleaned;
      }

      player.SetVar("AccountNumber", cleaned);

      // True when at least one digit is entered
      player.SetVar("ValidAccount", /^\d+$/.test(cleaned));
    }

    field.addEventListener("input", cleanValue);
    cleanValue();
  }

  setupField();
})();

}

window.Script7 = function()
{
  
(function () {
  const player = GetPlayer();

  function setupFields() {
    const fields = [...document.querySelectorAll("input")];

    const percentage = fields.find(el =>
      el.getAttribute("aria-label") === "Percentage Entry"
    );

    const dollar = fields.find(el =>
      el.getAttribute("aria-label") === "Dollar Amount Entry"
    );

    if (!percentage || !dollar) {
      setTimeout(setupFields, 200);
      return;
    }

    function validate() {
      const percentValue = percentage.value.trim();
      const dollarValue = dollar.value.trim();

      const validPercent =
        /^\d{1,2}$/.test(percentValue) &&
        Number(percentValue) >= 1 &&
        Number(percentValue) <= 99;

      const validDollar =
        /^\d+(\.\d{1,2})?$/.test(dollarValue) &&
        Number(dollarValue) > 0;

      // Only one field can contain a value
      if (percentValue !== "") {
        dollar.disabled = true;
        percentage.disabled = false;
      } else if (dollarValue !== "") {
        percentage.disabled = true;
        dollar.disabled = false;
      } else {
        percentage.disabled = false;
        dollar.disabled = false;
      }

      player.SetVar(
        "ValidPercentage",
        validPercent && dollarValue === ""
      );

      player.SetVar(
        "ValidDollarAmount",
        validDollar && percentValue === ""
      );
    }

    percentage.addEventListener("input", validate);
    dollar.addEventListener("input", validate);

    validate();
  }

  setupFields();
})();

}

window.Script8 = function()
{
  (function () {
  function clearFields() {
    const fields = [...document.querySelectorAll("input")];

    const percentage = fields.find(el =>
      el.getAttribute("aria-label") === "Percentage Entry"
    );

    const dollar = fields.find(el =>
      el.getAttribute("aria-label") === "Dollar Amount Entry"
    );

    if (!percentage || !dollar) {
      setTimeout(clearFields, 200);
      return;
    }

    percentage.value = "";
    dollar.value = "";

    percentage.disabled = false;
    dollar.disabled = false;

    percentage.dispatchEvent(
      new Event("input", { bubbles: true })
    );

    dollar.dispatchEvent(
      new Event("input", { bubbles: true })
    );
  }

  clearFields();
})();
}

window.Script9 = function()
{
  
(function () {
  function setupField() {
    const field = document.querySelector(
      'input[type="text"], textarea'
    );

    if (!field) {
      setTimeout(setupField, 200);
      return;
    }

    field.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        field.blur();
      }
    });
  }

  setupField();
})();

}

};
