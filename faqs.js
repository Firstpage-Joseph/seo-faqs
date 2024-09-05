document.addEventListener('DOMContentLoaded', function () {
    function fpd_accordion_faqs_multiple(tagparent, tagelement) {
        var questions = document.querySelectorAll('.'+tagparent+' '+tagelement);
        questions.forEach(function (question) {
            var siblings = [];
            var sibling = question.nextElementSibling;
            var tagup = tagelement.toUpperCase();
            while (sibling && sibling.tagName !== tagup) {
                siblings.push(sibling);
                sibling = sibling.nextElementSibling;
            }
            if (siblings.length > 0) {
                var answerWrapper = document.createElement('div');
                answerWrapper.classList.add('answers-wrapper');

                siblings.forEach(function (sibling) {
                answerWrapper.appendChild(sibling);
                });
                question.parentNode.insertBefore(answerWrapper, question.nextElementSibling);

                var toggleIcon = document.createElement('span');
                toggleIcon.className = 'toggle-icon';
                question.appendChild(toggleIcon);

                question.addEventListener('click', function () {
                toggleIcon.classList.toggle('active');
                answerWrapper.style.display = (answerWrapper.style.display === 'block') ? 'none' : 'block';
                });
            }
        });
    }
    fpd_accordion_faqs_multiple('seo-faqs', 'h3');
    // fpd_accordion_faqs_multiple('answers-wrapper','h4');
});
