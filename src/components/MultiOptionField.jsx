import Input from './Input';
import Button from './Button';

const MultiOptionField = ({ item, updateField, isViewMode }) => {
  const fieldType = item.name;
  const label = item.label || '';
  const options = item.options || [];

  const addOption = () => {
    updateField(item.id, { options: [...options, { id: Date.now(), value: '' }] });
  };

  const handleOptionChange = (id, newValue) => {
    updateField(item.id, {
      options: options.map((opt) => (opt.id === id ? { ...opt, value: newValue } : opt)),
    });
  };

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <Input
          type="text"
          name={fieldType}
          placeholder={fieldType}
          value={label}
          isViewMode={isViewMode}
          onChange={(e) => updateField(item.id, { label: e.target.value })}
        />
      </div>

      <Button value="Add Option +" onClick={addOption} isViewMode={isViewMode} />

      {options.map((option, index) => (
        <div key={option.id} style={{ marginTop: '8px', marginLeft: '16px' }}>
          <Input
            type="text"
            name={`option-${index}`}
            placeholder={`Option ${index + 1}`}
            value={option.value}
            isViewMode={isViewMode}
            onChange={(e) => handleOptionChange(option.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiOptionField;
