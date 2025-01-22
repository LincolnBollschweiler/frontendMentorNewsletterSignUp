export const signUp = () => {
  $(document)
    .off("submit", "#sign-up-form")
    .on("submit", "#sign-up-form", (e) => {
      e.preventDefault();
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // email pattern
      const data = Object.fromEntries(new FormData(e.target));
      const valid = pattern.test(data.email);
      if (!valid) {
        $("#email").addClass("submitted");
        $("#email-error").show();
        return;
      }
      $("#email").removeClass("submitted");
      $("#userEmail").text(data.email);
      $(".sign-up").hide();
      $(".thank-you").show();
    })
    .on("keydown", "#email", () => {
      $("#email-error").hide();
    });

  return `
    <div class="card sign-up">
        <div class="card-body flex">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul role="list">
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>
            <form id="sign-up-form" class="flex" novalidate>
                <div class="flex email">
                    <label for="email">Email address</label>
                    <label class="danger" id="email-error">Valid Email required</label>
                </div>
                <input id="email" type="email" name="email" placeholder="email@company.com" required />
                <button id="sign-up-button" type="submit">Subscribe to monthly newsletter</button>
            </form>
        </div>
        <div class="sign-up-img" title="Sign up"></div>
    </div>
`;
};
