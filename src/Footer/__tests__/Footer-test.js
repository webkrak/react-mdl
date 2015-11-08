/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { Footer } from '../';

describe('Footer', () => {
    it('should render a footer with the specific css class', () => {
        var output = render(<Footer />);

        expect(output.type).toBe('footer');
        expect(output.props.className)
            .toInclude('mdl-mega-footer');
    });

    it('should allow custom css classes', () => {
        var output = render(<Footer className="my-footer" />);

        expect(output.props.className)
            .toInclude('mdl-mega-footer')
            .toInclude('my-footer');
    });

    it('should render with a mini size if specified', () => {
        var output = render(<Footer size="mini" />);

        expect(output.props.className)
            .toInclude('mdl-mini-footer');
    });

    it('should pass the size to children', () => {
        var element = (
            <Footer>
                <div>Allo</div>
            </Footer>
        );
        var output = render(element);

        expect(output.props.children[0].props.size).toBe('mega');
    });
});
