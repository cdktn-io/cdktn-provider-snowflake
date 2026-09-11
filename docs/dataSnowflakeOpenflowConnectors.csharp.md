# `dataSnowflakeOpenflowConnectors` Submodule <a name="`dataSnowflakeOpenflowConnectors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectors <a name="DataSnowflakeOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectors(Construct Scope, string Id, DataSnowflakeOpenflowConnectorsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn"></a>

```csharp
private void PutIn(DataSnowflakeOpenflowConnectorsIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeOpenflowConnectorsLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectors.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowConnectors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors">OpenflowConnectors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in"></a>

```csharp
public DataSnowflakeOpenflowConnectorsInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit"></a>

```csharp
public DataSnowflakeOpenflowConnectorsLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a>

---

##### `OpenflowConnectors`<sup>Required</sup> <a name="OpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsList OpenflowConnectors { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput"></a>

```csharp
public DataSnowflakeOpenflowConnectorsIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput"></a>

```csharp
public DataSnowflakeOpenflowConnectorsLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorsConfig <a name="DataSnowflakeOpenflowConnectorsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeOpenflowConnectorsIn In = null,
    string Like = null,
    DataSnowflakeOpenflowConnectorsLimit Limit = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in"></a>

```csharp
public DataSnowflakeOpenflowConnectorsIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit"></a>

```csharp
public DataSnowflakeOpenflowConnectorsLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

### DataSnowflakeOpenflowConnectorsIn <a name="DataSnowflakeOpenflowConnectorsIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

### DataSnowflakeOpenflowConnectorsLimit <a name="DataSnowflakeOpenflowConnectorsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

### DataSnowflakeOpenflowConnectorsOpenflowConnectors <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectors {

};
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput {

};
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorsInOutputReference <a name="DataSnowflakeOpenflowConnectorsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorsIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---


### DataSnowflakeOpenflowConnectorsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorsLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash">DefaultVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias">LastVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash">LastVersionGitCommitHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri">LastVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName">LastVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri">LastVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition"></a>

```csharp
public string ConnectorDefinition { get; }
```

- *Type:* string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl"></a>

```csharp
public string ConnectorUrl { get; }
```

- *Type:* string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; }
```

- *Type:* string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```csharp
public string DefaultVersionAlias { get; }
```

- *Type:* string

---

##### `DefaultVersionGitCommitHash`<sup>Required</sup> <a name="DefaultVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```csharp
public string DefaultVersionGitCommitHash { get; }
```

- *Type:* string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```csharp
public string DefaultVersionLocationUri { get; }
```

- *Type:* string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName"></a>

```csharp
public string DefaultVersionName { get; }
```

- *Type:* string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```csharp
public string DefaultVersionSourceLocationUri { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastVersionAlias`<sup>Required</sup> <a name="LastVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias"></a>

```csharp
public string LastVersionAlias { get; }
```

- *Type:* string

---

##### `LastVersionGitCommitHash`<sup>Required</sup> <a name="LastVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```csharp
public string LastVersionGitCommitHash { get; }
```

- *Type:* string

---

##### `LastVersionLocationUri`<sup>Required</sup> <a name="LastVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```csharp
public string LastVersionLocationUri { get; }
```

- *Type:* string

---

##### `LastVersionName`<sup>Required</sup> <a name="LastVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName"></a>

```csharp
public string LastVersionName { get; }
```

- *Type:* string

---

##### `LastVersionSourceLocationUri`<sup>Required</sup> <a name="LastVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```csharp
public string LastVersionSourceLocationUri { get; }
```

- *Type:* string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```csharp
public string LiveVersionLocationUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get"></a>

```csharp
private DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition"></a>

```csharp
public string ConnectorDefinition { get; }
```

- *Type:* string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl"></a>

```csharp
public string ConnectorUrl { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; }
```

- *Type:* string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias"></a>

```csharp
public string DefaultVersionAlias { get; }
```

- *Type:* string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```csharp
public string DefaultVersionLocationUri { get; }
```

- *Type:* string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName"></a>

```csharp
public string DefaultVersionName { get; }
```

- *Type:* string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```csharp
public string DefaultVersionSourceLocationUri { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri"></a>

```csharp
public string LiveVersionLocationUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a>

---



