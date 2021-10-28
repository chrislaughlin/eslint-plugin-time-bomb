const regex = /TODO: .* - [0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;

module.exports = {
    rules: {
        "time-bomb": context =>
        ({
            Program(node) {
                node.comments.forEach((comment) => {
                  const matches = comment.value.match(regex);
                  if (matches && matches.length > 0) {
                    const dueDate = new Date(comment.value.slice(
                        comment.value.length - 10
                    ));
                    const today = new Date();
                    
                    if (today.valueOf() > dueDate.valueOf()) {
                        context.report({
                            node,
                            message: `TODO past due date: was due ${dueDate}`
                          });
                    }
                  }
                });
              }
        })
    }

};
