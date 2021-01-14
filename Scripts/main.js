
exports.activate = ()=> {}
exports.deactivate = ()=> {}

nova.commands.register('duplicates.deleteSelectionDuplicates', (editor) => {
    
    const ranges = editor.selectedRanges;

    for (const r of ranges) {
        const text = editor.getTextInRange(r);
        const texts = text.split('\n');
        
        const dedupped = Array.from(new Set(texts));
        
        editor.edit((e) => {
            e.replace(r, dedupped.join('\n'));
        });
    } 

});
