# `dataSnowflakePostgresMirrors` Submodule <a name="`dataSnowflakePostgresMirrors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePostgresMirrors <a name="DataSnowflakePostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrors(Construct Scope, string Id, DataSnowflakePostgresMirrorsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance">ResetPostgresInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPostgresInstance` <a name="ResetPostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance"></a>

```csharp
private void ResetPostgresInstance()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakePostgresMirrors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakePostgresMirrors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakePostgresMirrors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakePostgresMirrors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakePostgresMirrors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakePostgresMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors">PostgresMirrors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput">PostgresInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PostgresMirrors`<sup>Required</sup> <a name="PostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrorsList PostgresMirrors { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PostgresInstanceInput`<sup>Optional</sup> <a name="PostgresInstanceInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput"></a>

```csharp
public string PostgresInstanceInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePostgresMirrorsConfig <a name="DataSnowflakePostgresMirrorsConfig" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string PostgresInstance = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostgresInstance`<sup>Optional</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; set; }
```

- *Type:* string

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

### DataSnowflakePostgresMirrorsPostgresMirrors <a name="DataSnowflakePostgresMirrorsPostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrors {

};
```


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput {

};
```


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get"></a>

```csharp
private DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes">ApplyLagBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations">ApplyLagOperations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds">ApplyLagSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName">CatalogIntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly">FeedOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn">LastAppliedCommitLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime">LastAppliedCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime">LastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId">LastOperationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime">LastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas">PostgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus">PostgresStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables">PostgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations">RecentQueryDurations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType">TargetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyLagBytes`<sup>Required</sup> <a name="ApplyLagBytes" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes"></a>

```csharp
public double ApplyLagBytes { get; }
```

- *Type:* double

---

##### `ApplyLagOperations`<sup>Required</sup> <a name="ApplyLagOperations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations"></a>

```csharp
public double ApplyLagOperations { get; }
```

- *Type:* double

---

##### `ApplyLagSeconds`<sup>Required</sup> <a name="ApplyLagSeconds" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds"></a>

```csharp
public double ApplyLagSeconds { get; }
```

- *Type:* double

---

##### `CatalogIntegrationName`<sup>Required</sup> <a name="CatalogIntegrationName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```csharp
public string CatalogIntegrationName { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `FeedOnly`<sup>Required</sup> <a name="FeedOnly" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly"></a>

```csharp
public IResolvable FeedOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastAppliedCommitLsn`<sup>Required</sup> <a name="LastAppliedCommitLsn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```csharp
public string LastAppliedCommitLsn { get; }
```

- *Type:* string

---

##### `LastAppliedCommitTime`<sup>Required</sup> <a name="LastAppliedCommitTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```csharp
public string LastAppliedCommitTime { get; }
```

- *Type:* string

---

##### `LastApplyTime`<sup>Required</sup> <a name="LastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime"></a>

```csharp
public string LastApplyTime { get; }
```

- *Type:* string

---

##### `LastOperationId`<sup>Required</sup> <a name="LastOperationId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId"></a>

```csharp
public double LastOperationId { get; }
```

- *Type:* double

---

##### `LastOperationTime`<sup>Required</sup> <a name="LastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime"></a>

```csharp
public string LastOperationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; }
```

- *Type:* string

---

##### `PostgresSchemas`<sup>Required</sup> <a name="PostgresSchemas" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas"></a>

```csharp
public string[] PostgresSchemas { get; }
```

- *Type:* string[]

---

##### `PostgresStatus`<sup>Required</sup> <a name="PostgresStatus" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus"></a>

```csharp
public string PostgresStatus { get; }
```

- *Type:* string

---

##### `PostgresTables`<sup>Required</sup> <a name="PostgresTables" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables"></a>

```csharp
public string[] PostgresTables { get; }
```

- *Type:* string[]

---

##### `RecentQueryDurations`<sup>Required</sup> <a name="RecentQueryDurations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations"></a>

```csharp
public string RecentQueryDurations { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase"></a>

```csharp
public string TargetDatabase { get; }
```

- *Type:* string

---

##### `TargetTableType`<sup>Required</sup> <a name="TargetTableType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType"></a>

```csharp
public string TargetTableType { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get"></a>

```csharp
private DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get"></a>

```csharp
private DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining">InitialSnapshotTablesRemaining</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime">LastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime">LastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount">TableCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InitialSnapshotTablesRemaining`<sup>Required</sup> <a name="InitialSnapshotTablesRemaining" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining"></a>

```csharp
public double InitialSnapshotTablesRemaining { get; }
```

- *Type:* double

---

##### `LastApplyTime`<sup>Required</sup> <a name="LastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime"></a>

```csharp
public string LastApplyTime { get; }
```

- *Type:* string

---

##### `LastOperationTime`<sup>Required</sup> <a name="LastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime"></a>

```csharp
public string LastOperationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TableCount`<sup>Required</sup> <a name="TableCount" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount"></a>

```csharp
public double TableCount { get; }
```

- *Type:* double

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase"></a>

```csharp
public string TargetDatabase { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a>

---



