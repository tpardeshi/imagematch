import React, { useState } from "react";
import {
  Form,
  FormSelect,
  FormSelectOption,
  Button,
  DataToolbarContent,
  DataToolbarItem,
  Badge,
  Title,
} from "@patternfly/react-core";
import ReactTooltip from "react-tooltip";
import { GripHorizontalIcon, GripVerticalIcon } from "@patternfly/react-icons";

export default function PaginateForm(props) {
  const [selectProductsVersion, setSelectProductsVersion] = useState("");
  const [selectLocales, setSelectLocales] = useState("");
  const [hover, setHover] = useState(false);

  // function handleChangeName(name) {
  //   return name === "Change Layout"
  //     ? setName("Rechange Layout")
  //     : setName("Change Layout");
  // }

  return (
    <>
      <Form onSubmit={props.handleSubmit}>
        <DataToolbarContent>
          <DataToolbarItem variant="label" id="version">
            Select a Version
          </DataToolbarItem>
          <DataToolbarItem>
            <FormSelect
              value={
                selectProductsVersion
                  ? selectProductsVersion
                  : props.selectProductsVersion
              }
              onChange={(e, event) => (
                props.handleVersionChange(e, event),
                setSelectProductsVersion(e, event)
              )}
              aria-label="Version"
              id="version"
              name="version"
            >
              <option>Select</option>
              {props.productsVersion.map((option, index) => (
                <FormSelectOption
                  key={index}
                  value={option.id}
                  label={option.name}
                />
              ))}
            </FormSelect>
          </DataToolbarItem>
          <DataToolbarItem variant="label" id="locale">
            Select a Locale
          </DataToolbarItem>
          <DataToolbarItem>
            <FormSelect
              value={selectLocales ? selectLocales : props.selectLocales}
              onChange={(e, event) => (
                props.handleLocaleChange(e, event), setSelectLocales(e, event)
              )}
              aria-label="Locale"
              id="locale"
              name="locale"
            >
              <option>Select</option>
              {props.locales.map((option, index) => (
                <FormSelectOption
                  key={index}
                  value={option.id}
                  label={option.language}
                />
              ))}
            </FormSelect>
          </DataToolbarItem>
          <DataToolbarItem>
            <Button type="submit" value="submit">
              Submit
            </Button>
          </DataToolbarItem>
          {/* <DataToolbarItem className="layout">
            <Button
              isDisabled={
                props.selectLocales === "3" ||
                props.screenshotsOther.length == 0
                  ? true
                  : false
              }
              onClick={() => {
                props.handleLayout(name);
                handleChangeName(name);
              }}
            >
              {name}
            </Button>
          </DataToolbarItem> */}
          <GripHorizontalIcon
            data-tip
            data-for="horizontal"
            className="layout"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              props.handleLayout("Horizontal");
            }}
          ></GripHorizontalIcon>
          <div>
            {hover && (
              <ReactTooltip class="horizontal" id="horizontal" type="error">
                <span>Two Column Layout</span>
              </ReactTooltip>
            )}
            {hover && (
              <ReactTooltip class="vertical" id="vertical" type="error">
                <span>One Column Layout</span>
              </ReactTooltip>
            )}
          </div>
          <GripVerticalIcon
            data-tip
            data-for="vertical"
            className="layout2"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              props.handleLayout("Vertical");
            }}
          ></GripVerticalIcon>
        </DataToolbarContent>
      </Form>
    </>
  );
}
