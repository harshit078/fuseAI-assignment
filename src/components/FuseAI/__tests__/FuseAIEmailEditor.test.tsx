import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FuseAIEmailEditor } from '../FuseAIEmailEditor';

const mockRecipient = {
  name: 'John Smith',
  email: 'john@domain.com',
  initial: 'J',
};

const mockContent = {
  greeting: 'Hi John,',
  body: [
    'First paragraph',
    'Second paragraph',
  ],
  signature: {
    name: 'Ethan Parkinson',
    title: 'Founder, Talkhappi',
  },
};

describe('FuseAIEmailEditor', () => {
  const mockOnCopy = jest.fn();
  const mockOnDelete = jest.fn();

  const defaultProps = {
    recipient: mockRecipient,
    subject: 'Test Subject',
    content: mockContent,
    onCopy: mockOnCopy,
    onDelete: mockOnDelete,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the email editor with all components', () => {
    const { getByText, getByDisplayValue } = render(<FuseAIEmailEditor {...defaultProps} />);

    // Check header elements
    expect(getByText('Email')).toBeInTheDocument();
    
    // Check recipient info
    expect(getByText(mockRecipient.name)).toBeInTheDocument();
    expect(getByText(mockRecipient.email)).toBeInTheDocument();
    expect(getByText(mockRecipient.initial)).toBeInTheDocument();
    
    // Check subject
    expect(getByDisplayValue('Test Subject')).toBeInTheDocument();
    
    // Check content
    expect(getByText(mockContent.greeting)).toBeInTheDocument();
    expect(getByText('First paragraph')).toBeInTheDocument();
    expect(getByText('Second paragraph')).toBeInTheDocument();
    
    // Check signature
    expect(getByText(mockContent.signature.name)).toBeInTheDocument();
    expect(getByText(mockContent.signature.title)).toBeInTheDocument();
  });

  it('shows "Wait for" section only for first email', () => {
    const { rerender, getAllByText, getByText, queryByText } = render(
      <FuseAIEmailEditor {...defaultProps} isSecondEmail={false} />
    );
    expect(getAllByText('Wait for')).toHaveLength(1);
    expect(getByText('3 days')).toBeInTheDocument();

    rerender(<FuseAIEmailEditor {...defaultProps} isSecondEmail={true} />);
    expect(queryByText('Wait for')).not.toBeInTheDocument();
  });

  it('calls onCopy when copy button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<FuseAIEmailEditor {...defaultProps} />);
    const copyButton = getByRole('button', { name: /copy/i });
    await user.click(copyButton);
    expect(mockOnCopy).toHaveBeenCalledTimes(1);
  });

  it('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<FuseAIEmailEditor {...defaultProps} />);
    const deleteButton = getByRole('button', { name: /delete/i });
    await user.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it('renders toolbar buttons with tooltips', () => {
    const { getByRole } = render(<FuseAIEmailEditor {...defaultProps} />);
    
    const toolbarButtons = [
      { name: 'Bold', tooltip: 'Bold' },
      { name: 'Italic', tooltip: 'Italic' },
      { name: 'Underline', tooltip: 'Underline' },
      { name: 'Strikethrough', tooltip: 'Strikethrough' },
      { name: 'Link', tooltip: 'Insert link' },
      { name: 'AlignLeft', tooltip: 'Align left' },
      { name: 'AlignCenter', tooltip: 'Center' },
      { name: 'AlignRight', tooltip: 'Align right' },
      { name: 'ListOrdered', tooltip: 'Numbered list' },
      { name: 'Checklist', tooltip: 'Checklist' },
      { name: 'Image', tooltip: 'Insert image' },
      { name: 'Code', tooltip: 'Insert code' },
    ];

    toolbarButtons.forEach(({ tooltip }) => {
      const button = getByRole('button', { name: new RegExp(tooltip, 'i') });
      expect(button).toBeInTheDocument();
    });
  });

  it('shows AI Generated badge', () => {
    const { getByText } = render(<FuseAIEmailEditor {...defaultProps} />);
    expect(getByText('AI Generated')).toBeInTheDocument();
  });
}); 