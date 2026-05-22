export const handleDeleteForm = (index, e, forms, setForms, setActiveTooltip) => {
  e.stopPropagation();
  const newForms = forms.filter((_, i) => i !== index);
  setForms(newForms);
  localStorage.setItem('dynamicForm', JSON.stringify(newForms));
  setActiveTooltip(null);
};

export const handleEditForm = (form, index, e, navigate) => {
  e.stopPropagation();
  navigate(`/dashboard/form?editId=${index}&playAction="Edit"`, {
    state: { FileName: form.FileName },
  });
};

export const handleViewDetails = (form, index, e, navigate, setActiveTooltip) => {
  e.stopPropagation();
  navigate(`/dashboard/form?viewId=${index}&playAction="View"`, { 
    state: { FileName: form.FileName } 
  });
  setActiveTooltip(null);
};

export const handleFormCreation = (newForm, forms, setForms, setIsModal, navigate) => {
  if (newForm === '') {
    alert('Name is required');
  } else {
    setIsModal(false);
    const newFormsList = [...forms, { FileName: newForm }];
    setForms(newFormsList);
    localStorage.setItem('dynamicForm', JSON.stringify(newFormsList));
    navigate('/dashboard/form', { state: { FileName: newForm } });
  }
};
