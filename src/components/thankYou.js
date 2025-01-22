export const thankYou = () => {
  $(document)
    .off("click", "#back-to-sign-up")
    .on("click", "#back-to-sign-up", () => {
      $(".thank-you").hide();
      $(".sign-up").show();
    });

  return `
    <div class="card thank-you">
        <div class="card-body flex">
            <h1>Thank you for subscribing!</h1>
            <p>A confirmation email has been sent to <strong><span id="userEmail"></span></strong>. Please open it and click the button inside to confirm your subscription.</p>
            <button id="back-to-sign-up" type="button">Back to sign up</button>
        </div>
        <div class="thank-you-img" title="Thank you"></div>
    </div>
`;
};
